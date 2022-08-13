import urlMetadata from 'url-metadata';

import {
  postsRepository,
  usersRepository,
  tagsRepository,
  urlsRepository,
} from '../repositories/index.js';

// Locally used functions

const getUrlMetadata = async (link) => {
  const { url, title, image, description } = await urlMetadata(link, {
    descriptionLength: 50,
  });
  let urlInfo = await urlsRepository.getUrlByUrl(url);
  if (!urlInfo) {
    urlInfo = await urlsRepository.createUrl(url, title, image, description);
  }

  return urlInfo;
};

const extractTags = (content) => {
  const tags = content.match(/#\w+/g);
  return tags;
};

const processTags = async (tags, postId) => {
  const promises = tags.map(async (tag) => {
    let tagInfo = await tagsRepository.getTagByName(tag);
    if (!tagInfo) {
      tagInfo = await tagsRepository.createTag(tag);
    }
    await tagsRepository.createTagMention(tagInfo.id, postId);
  });
  await Promise.all(promises);
};

// Globally used functions

export const getTimelinePosts = async (req, res) => {
  try {
    const { userId } = res.locals;
    const posts = await postsRepository.getPosts(userId);
    return res.json(posts);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send('Something went wrong when trying to get the timeline posts.');
  }
};

export const sendPost = async (req, res) => {
  const { content, postLink } = res.locals.post;
  const { userId } = res.locals;
  try {
    const urlInfo = await getUrlMetadata(postLink);
    const createdPost = await postsRepository.createPost(
      userId,
      content,
      urlInfo.id
    );
    if (content) {
      const tags = extractTags(content);
      if (tags) await processTags(tags, createdPost.id);
    }
    return res.status(201).send('Post created!');
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send('Something went wrong when trying to create a post.');
  }
};

export const getUserPosts = async (req, res) => {
  const { id } = req.params;
  const { userId } = res.locals;

  try {
    const userData = await usersRepository.getUserById(id);
    const userPosts = await postsRepository.getUserPosts(id, userId);

    if (!userData) {
      return res.status(404).send('User not found.');
    }

    const pageBody = {
      userName: userData.name,
      userPicUrl: userData.pic_url,
      userPosts,
    };
    return res.json(pageBody);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send('Something went wrong when trying to search the posts.');
  }
};

export const getTagPosts = async (req, res) => {
  const { hashtag } = req.params;
  const { userId } = res.locals;

  try {
    const tagPosts = await postsRepository.getTagPosts(hashtag, userId);

    const pageBody = {
      hashtag,
      tagPosts,
    };
    
    return res.json(pageBody);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send('Something went wrong when trying to search the posts.');
  }
};

export const deletePost = async (req, res) => {
  const { id, userId } = res.locals;

  try {
    const postData = await postsRepository.getPostById(id);

    if (!postData) {
      return res.status(404).send('Post not found.');
    }

    if (postData.author_id !== userId) {
      return res.sendStatus(401);
    }

    await tagsRepository.deletePostMentions(id);
    await postsRepository.deletePostById(id);
    await tagsRepository.clearUnmentionedTags();
    await urlsRepository.clearUnmentionedUrls();
    return res.sendStatus(200);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send('Something went wrong when trying to delete the post.');
  }
};

export const editPost = async (req, res) => {
  const { content, postLink } = res.locals.post;
  const { id, userId } = res.locals;
  try {
    // Guarantees that there is a post to edit and if the user is the owner
    const originalPost = await postsRepository.getPostById(id);
    if (!originalPost) {
      return res.status(404).send('Post not found.');
    }
    if (originalPost.author_id !== userId) {
      return res.sendStatus(401);
    }

    // make the update
    const urlInfo = await getUrlMetadata(postLink);
    await postsRepository.editPostById(id, content, urlInfo.id);

    await urlsRepository.clearUnmentionedUrls();

    // clears old tag mentions process new ones and delete unused tags
    await tagsRepository.deletePostMentions(id);
    if (content) {
      const tags = extractTags(content);
      if (tags) await processTags(tags, id);
    }
    await tagsRepository.clearUnmentionedTags();

    return res.status(200).send('Post edited!');
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send('Something went wrong when trying to edit a post.');
  }
};

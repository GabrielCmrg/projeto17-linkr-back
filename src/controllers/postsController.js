import urlMetadata from 'url-metadata';

import {
  postsRepository,
  usersRepository,
  tagsRepository,
} from '../repositories/index.js';

// Locally used functions

const getUrlMetadata = async (link) => {
  const { url, title, image, description } = await urlMetadata(link, {
    descriptionLength: 50,
  });
  let urlInfo = await postsRepository.getUrlByUrl(url);
  if (!urlInfo) {
    urlInfo = await postsRepository.createUrl(url, title, image, description);
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
  const { id } = res.locals;

  try {
    const userData = await usersRepository.getUserById(id);
    const userPosts = await postsRepository.getUserPosts(id);

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

    await postsRepository.deletePostById(id);
    return res.sendStatus(200);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send('Something went wrong when trying to delete the post.');
  }
};

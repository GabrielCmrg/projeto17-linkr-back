import urlMetadata from 'url-metadata';

import { postsRepository } from '../repositories/index.js';

export const getTimelinePosts = async (req, res) => {
  try {
    const posts = await postsRepository.getPosts();
    return res.json(posts);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send('Something went wrong when trying to get the timeline posts.');
  }
};

export const sendPost = async (req, res) => {
  const { content, postLink } = req.body;
  const { url, title, image, description } = await urlMetadata(postLink, {
    descriptionLength: 50,
  });
  const { userId } = res.locals;
  try {
    let urlsInfo = await postsRepository.getUrl(url);
    if (urlsInfo.length === 0) {
      await postsRepository.saveUrlInDatabase(url, title, image, description);
      urlsInfo = await postsRepository.getUrl(url);
      await postsRepository.savePostInDatabase(userId, content, urlsInfo[0].id);
      return res.sendStatus(201);
    }
    await postsRepository.savePostInDatabase(userId, content, urlsInfo[0].id);
    return res.sendStatus(201);
  } catch (error) {
    console.log(error);
    return res.status(500).send('houve um erro ao armazernar o post');
  }
};

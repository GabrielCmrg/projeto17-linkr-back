import { postsRepository } from '../repositories/index.js';
import urlMetadata from 'url-metadata';

export async function timeline(req, res) {
  try {
    const posts = await postsRepository.getPost();
    res.status(200).send(posts);
  } catch (error) {
    res.sendStatus(500);
  }
}

export async function sendPost(req, res) {
  const { content, postLink } = req.body;
  const { url, title, image, description } = await urlMetadata(postLink, { descriptionLength: 50 })
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
    res.status(500).send('houve um erro ao armazernar o post');
  }
}

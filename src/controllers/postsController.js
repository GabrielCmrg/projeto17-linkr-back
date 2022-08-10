import { postsRepository } from '../repositories/index.js';

async function timeline(req, res) {
  try {
    const posts = await postsRepository.getPost();
    res.status(200).send(posts);
  } catch (error) {
    res.sendStatus(500);
  }
}

async function sendPost(req, res) {
  const { content, postLink } = req.body;
  const userId = res.locals.data.id;
  try {
    await postsRepository.savePostInDatabase(userId, content, postLink);
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.status(500).send('houve um erro ao armazernar o post');
  }
}

export { timeline, sendPost };

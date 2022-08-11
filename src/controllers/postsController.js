import urlMetadata from 'url-metadata';

import { postsRepository } from '../repositories/index.js';
import { usersRepository } from '../repositories/index.js';

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
  const { content, postLink } = res.locals.post;
  const { url, title, image, description } = await urlMetadata(postLink, {
    descriptionLength: 50,
  });
  const { userId } = res.locals;
  try {
    let urlInfo = await postsRepository.getUrlByUrl(url);
    if (!urlInfo) {
      urlInfo = await postsRepository.createUrl(url, title, image, description);
    }
    await postsRepository.createPost(userId, content, urlInfo.id);
    return res.status(201).send('Post created!');
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send('Something went wrong when trying to create a post.');
  }
};

export const getUserPosts = async (req, res) => {
  const { id } = req.params
  
  try {
      const {rows: userData} = await usersRepository.getUserData(id)
      const {rows: userPosts} = await postsRepository.getUserPosts(id)

      if (!userData.length) {
          return res 
              .status(404)
              .send('Usuário não encontrado')
      }

      const pageBody = {
          userName: userData[0].name,
          userPicUrl: userData[0].picUrl,
          userPosts
      }
      return res.status(200).send(pageBody)
  } catch (error) {

      console.error(error)
      return res
          .status(500)
          .send('Algo deu errado')
  }
};


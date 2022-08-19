import { commentsRepository } from '../repositories/index.js';

export const makeComment = async (req, res) => {
  const { userId, comment: commentBody } = res.locals;
  const { postId, comment } = commentBody;
  try {
    await commentsRepository.createComment(postId, comment, userId);
    return res.status(201).send('Comment creaed!');
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send('Something went wrong when trying to make a comment.');
  }
};

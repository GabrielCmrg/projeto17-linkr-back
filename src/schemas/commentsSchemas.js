import joi from 'joi';

export const commentSchema = joi.object({
  comment: joi.string().trim().required(),
  postId: joi.number().integer().greater(0).required(),
});

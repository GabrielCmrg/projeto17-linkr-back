import Joi from 'joi';

export const sendPostSchema = Joi.object({
  postLink: Joi.string().uri().trim().required(),
  content: Joi.string().allow(null, '').trim(),
});

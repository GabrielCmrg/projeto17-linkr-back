import Joi from 'joi';

<<<<<<< HEAD:src/schemas/postsSchemas.js
export const sendPostSchema = Joi.string().uri().trim().required();
=======
export const sendPostSchema = Joi.object({
  postLink: Joi.string().uri().trim().required(),
  content: Joi.string().allow(null, '').trim(),
});
>>>>>>> teste:src/schemas/postSchemas.js

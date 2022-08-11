import { postsSchemas } from '../schemas/index.js';

export const checkSendPostBody = (req, res, next) => {
  const validation = postsSchemas.sendPostSchema.validate(req.body);
  if (validation.error) {
    const returnObject = {
      message:
        "The post object sent is not valid. See the API's documentation.",
      errors: validation.error,
    };
    return res.status(422).json(returnObject);
  }

  res.locals.post = validation.value;
  return next();
};
export const checkReqParams = (req, res, next) => {
  const { id } = req.params

  if (!/^[0-9]*$/.test(id)) {
      return res
          .status(400)
          .send('Id de usuário inválido')
  }
  
  next();
};

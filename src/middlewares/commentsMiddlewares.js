import { commentsSchemas } from '../schemas/index.js';

export const checkCommentBody = (req, res, next) => {
  const validation = commentsSchemas.commentSchema.validate(req.body);
  if (validation.error) {
    const returnObject = {
      message:
        "The comment object sent is not valid. See the API's documentation.",
      errors: validation.error,
    };
    return res.status(422).json(returnObject);
  }

  res.locals.comment = validation.value;
  return next();
};

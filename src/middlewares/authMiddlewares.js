import { authSchemas } from '../schemas/index.js';

export const checkSignupBody = (req, res, next) => {
  const validation = authSchemas.signupSchema.validate(req.body);
  if (validation.error) {
    const returnObject = {
      message:
        "The signup object sent is not valid. See the API's documentation.",
      errors: validation.error,
    };
    return res.status(422).json(returnObject);
  }

  res.locals.signupInfo = validation.value;
  return next();
};

export const checkLoginBody = (req, res, next) => {
  const validation = authSchemas.loginSchema.validate(req.body);
  if (validation.error) {
    const returnObject = {
      message:
        "The login object sent is not valid. See the API's documentation.",
      errors: validation.error,
    };
    return res.status(422).json(returnObject);
  }

  res.locals.credentials = validation.value;
  return next();
};

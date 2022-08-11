import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

import { authSchemas } from '../schemas/index.js';

dotenv.config();

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

export const tokenValidation = (req, res, next) => {
  const validation = authSchemas.headerSchema.validate(req.headers);
  if (validation.error) {
    const returnObject = {
      message: "The header sent is not valid. See the API's documentation.",
      errors: validation.error,
    };
    return res.status(422).json(returnObject);
  }

  const token = validation.value.authorization.replace('Bearer ', '');
  const { JWT_SECRET_KEY } = process.env;
  try {
    const tokenData = jwt.verify(token, JWT_SECRET_KEY);
    res.locals.userId = tokenData.userId;
    return next();
  } catch (error) {
    console.error(error);
    return res.sendStatus(401);
  }
};

import { authSchemas } from '../schemas/index.js';

export const checkSignupBody = (req, res, next) => {
  const validation = authSchemas.signupSchema.validate(req.body);
  if (validation.error) {
    const returnObject = {
      message: 'O objeto enviado não é válido. Consulte a documentação da API.',
      errors: validation.error,
    };
    return res.status(422).json(returnObject);
  }

  res.locals.signupInfo = validation.value;
  return next();
};

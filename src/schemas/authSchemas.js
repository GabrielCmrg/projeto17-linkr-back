import joi from 'joi';

export const signupSchema = joi.object({
  email: joi.string().trim().email().required(),
  password: joi
    .string()
    .trim()
    .pattern(
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*!@$%^&(){}[\]:;<>,.?/~_+-=|]).{8,32}$/
    )
    .required(),
  name: joi.string().trim().required(),
  picUrl: joi.string().trim().uri().required(),
});

export const loginSchema = joi.object({
  email: joi.string().trim().email().required(),
  password: joi.string().trim().required(),
});

export const headerSchema = joi
  .object({
    authorization: joi
      .string()
      .pattern(/^Bearer .+$/)
      .required(),
  })
  .unknown(true);

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
  pic_url: joi.string().trim().uri().required(),
});
import { postSchemas } from "../schemas/index.js";

export function checkSendPostBody(req,res,next){
    const validation = postSchemas.sendPostSchema.validate(req.body);
    if (validation.error) {
        const returnObject = {
          message: 'O objeto enviado não é válido. Consulte a documentação da API.',
          errors: validation.error,
        };
        return res.status(422).json(returnObject);
      }
    next();
};
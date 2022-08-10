import bcrypt from 'bcrypt';

import { usersRepository } from '../repositories/index.js';

export const registerNewUser = async (req, res) => {
  const { signupInfo } = res.locals;
  const { email, name, picUrl, password: receivedPassword } = signupInfo;
  const password = bcrypt.hashSync(receivedPassword, 10);
  try {
    await usersRepository.createUser({ email, name, picUrl, password });
    return res.status(201).send('Usuário criado!');
  } catch (error) {
    if (error.routine === '_bt_check_unique') {
      return res.status(409).send('Esse email já está sendo usado.');
    }
    console.error(error);
    return res
      .status(500)
      .send('Algo deu errado ao tentar registrar o usuário.');
  }
};

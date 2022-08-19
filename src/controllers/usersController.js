import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import { usersRepository } from '../repositories/index.js';

dotenv.config();

export const registerNewUser = async (req, res) => {
  const { signupInfo } = res.locals;
  const { email, name, picUrl, password: receivedPassword } = signupInfo;
  const password = bcrypt.hashSync(receivedPassword, 10);
  try {
    await usersRepository.createUser({ email, name, picUrl, password });
    return res.status(201).send('User created!');
  } catch (error) {
    if (error.routine === '_bt_check_unique') {
      return res.status(409).send('This email is already in use.');
    }
    console.error(error);
    return res
      .status(500)
      .send('Something went wrong when trying to create the user.');
  }
};

export const loginUser = async (req, res) => {
  const { credentials } = res.locals;
  const { email, password } = credentials;
  try {
    const user = await usersRepository.getUserByEmail(email);
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).send('Wrong e-mail or password.');
    }
    const { JWT_SECRET_KEY } = process.env;
    const token = jwt.sign({ userId: user.id }, JWT_SECRET_KEY);
    return res.json({ token, image: user.pic_url });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send('Something went wrong when trying to search the user.');
  }
};

export const getUsersByName = async (req, res) => {
  const { search } = req.body;
  const { userId } = res.locals;
  try {
    const users = await usersRepository.getUsersByName(search, userId);
    return res.json(users);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send('Something went wrong when trying to search the users.');
  }
};

export const followUser = async (req, res) => {
  const followedId  = parseInt(req.params.id);
  const followerId = res.locals.userId;
  const { followStatus } = res.locals;

  if (followStatus) {
    return res
      .status(409)
      .send('Follow request failed, user already followed')
  } else if (followedId === followerId) {
    return res
      .status(409)
      .send('you can not follow yourself')
  }

  try {
    await usersRepository.followUser(followedId, followerId);

    return res.sendStatus(200);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send('Something went wrong when trying to follow user.');
  }
};

export const unfollowUser = async (req, res) => {
  const followedId  = parseInt(req.params.id);
  const followerId = res.locals.userId;
  const { followStatus } = res.locals;

  if (!followStatus) {
    return res
      .status(409)
      .send('Unfollow request failed, user should already be followed')
  }
  
  try {
    await usersRepository.unfollowUser(followedId, followerId);

    return res.sendStatus(200);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send('Something went wrong when trying to unfollow user.');
  }
};
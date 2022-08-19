import { usersRepository } from '../repositories/index.js';

export const checkFollowStatus = async (req, res, next) => {
  const followedId = req.params.id;
  const followerId = res.locals.userId;

  const followStatus = await usersRepository.checkFollowStatus(
    followedId,
    followerId
  );

  res.locals.followStatus = Boolean(followStatus);
  return next();
};

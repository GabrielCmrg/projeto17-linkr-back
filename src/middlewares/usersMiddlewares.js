import { usersRepository } from '../repositories/index.js';

export const checkFollowStatus = async (req, res, next) => {
    const followedId  = req.params.id;
    const followerId = res.locals.userId

    const followStatus = await usersRepository.checkFollowStatus(followedId, followerId);


    if (followStatus) {
        res.locals.followStatus = true
        return next();
    } else {
        res.locals.followStatus = false
        return next();
    }
  };
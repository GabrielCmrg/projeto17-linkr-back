import { tagsRepository } from '../repositories/index.js';

export const getAllTagsMentioned = async (req, res) => {
  try {
    const tags = await tagsRepository.getTags();
    return res.send(tags);
  } catch (error) {
    return res
      .status(500)
      .send('Something went wrong when trying to get the timeline posts.');
  }
};

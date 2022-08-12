import connection from '../databases/postgres.js';

export const createTag = async (name) => {
  const { rows: tag } = await connection.query(
    'INSERT INTO tags (name) VALUES ($1) RETURNING *',
    [name]
  );
  return tag[0];
};

export const createTagMention = async (tagId, postId) => {
  await connection.query(
    'INSERT INTO tag_mentions(post_id, tag_id) VALUES ($1, $2)',
    [postId, tagId]
  );
};

export const getTagByName = async (tagName) => {
  const { rows: tag } = await connection.query(
    'SELECT * FROM tags WHERE name = $1',
    [tagName]
  );
  return tag[0];
};

export const deletePostMentions = async (postId) => {
  await connection.query('DELETE FROM tags_mentions WHERE post_id = $1', [
    postId,
  ]);
};

export const clearUnmentionedTags = async () => {
  await connection.query(
    'DELETE FROM tags WHERE id NOT IN (SELECT tag_id FROM tag_mentions)'
  );
};

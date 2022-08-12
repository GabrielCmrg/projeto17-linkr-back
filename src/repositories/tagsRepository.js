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

export const getTags = async () => {
  const { rows: tag } = await connection.query(`
  SELECT tags.name, COUNT(tag_mentions.id) AS total 
  FROM tags JOIN tag_mentions ON tags.id=tag_mentions.tag_id 
  GROUP BY tags.name 
  ORDER BY total DESC
  `);
  return tag;
};

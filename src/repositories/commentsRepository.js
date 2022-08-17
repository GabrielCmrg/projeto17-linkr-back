import connection from '../databases/postgres.js';

export const createComment = async (postId, comment) => {
  await connection.query(
    'INSERT INTO comments (comment, post_id) VALUES ($1, $2)',
    [comment, postId]
  );
};

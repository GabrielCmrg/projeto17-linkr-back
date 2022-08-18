import connection from '../databases/postgres.js';

export const createComment = async (postId, comment, userId) => {
  await connection.query(
    'INSERT INTO comments (comment, post_id, user_id) VALUES ($1, $2, $3)',
    [comment, postId, userId]
  );
};

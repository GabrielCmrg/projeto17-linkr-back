import connection from '../databases/postgres.js';

export const getCommentsByPostId = async (postId, userId) => {
  const { rows: comments } = await connection.query(
    `
      SELECT
        comments.*,
        users.name,
        users.pic_url,
        posts.author_id = comments.user_id as authorship,
        comments.user_id IN (
          SELECT followed_id FROM follows WHERE follower_id = $2
        ) AS is_followed
      FROM comments
      JOIN users ON users.id = comments.user_id
      JOIN posts ON posts.id = comments.post_id
      WHERE post_id = $1
    `,
    [postId, userId]
  );
  return comments;
};

export const createComment = async (postId, comment, userId) => {
  await connection.query(
    'INSERT INTO comments (comment, post_id, user_id) VALUES ($1, $2, $3)',
    [comment, postId, userId]
  );
};

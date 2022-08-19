import connection from '../databases/postgres.js';

export const getCommentsByPostId = async (postId, userId) => {
  await connection.query(
    `
      SELECT
        comments.*,
        users.name,
        users.pic_url,
        posts.author_id = comments.user_id as authorship,
        comments.user_id IN (
          SELECT followed_id FROM follows WHERE follower_id = $2
        )
      FROM comments
      JOIN users ON users.id = comments.user_id
      JOIN posts ON posts.id = comments.post_id
      WHERE post_id = $1
    `,
    [postId, userId]
  );
};

import connection from '../databases/postgres.js';

export const getUserPosts = async (userId) => {
  return connection.query(
    `SELECT p.id AS "postId", p.author AS "postAuthor", u.name, u."picUrl", p.content, p.link 
    FROM posts p 
    JOIN users u ON u.id = p.author 
    WHERE p.author = $1`,
    [userId]
  );
};
  
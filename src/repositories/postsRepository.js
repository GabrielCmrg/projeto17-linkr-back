import connection from '../databases/postgres.js';

export const getPosts = async (id) => {
  const { rows: posts } = await connection.query(
    `
    SELECT 
    posts.id,
    users.name,
    users.pic_url,
    posts.content,
    urls.url as link_url,
    urls.title as link_title,
    urls.image as link_image,
    urls.description as link_description,
    posts.author_id = $1 as userAuthorship
  FROM posts
  JOIN users ON users.id = posts.author_id
  JOIN urls ON posts.url_id = urls.id
  ORDER BY id DESC
  LIMIT 20`,
    [id]
  );

  return posts;
};

export const getUserPosts = async (userId) => {
  const { rows: posts } = await connection.query(
    `
      SELECT
        p.id,
        us.name,
        us.pic_url,
        p.content,
        ur.url as link_url,
        ur.title as link_title,
        ur.image as link_image,
        ur.description as link_description 
      FROM posts p 
      JOIN users us ON us.id = p.author_id
      JOIN urls ur ON ur.id = p.url_id
      WHERE p.author_id = $1 
      ORDER BY id DESC
      LIMIT 20
    `,
    [userId]
  );
  return posts;
};

export const createPost = async (userId, content, urlId) => {
  const { rows: post } = await connection.query(
    `
      INSERT INTO posts(author_id, content, url_id)
      VALUES ($1, $2, $3)
      RETURNING *
    `,
    [userId, content, urlId]
  );
  return post[0];
};

export const createUrl = async (url, title, image, description) => {
  const { rows: urlMetadata } = await connection.query(
    `
      INSERT INTO urls(url, title, image, description)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `,
    [url, title, image, description]
  );
  return urlMetadata[0];
};

export const getUrlByUrl = async (url) => {
  const { rows: urlMetadata } = await connection.query(
    `
      SELECT * FROM urls
      WHERE url = $1
    `,
    [url]
  );
  return urlMetadata[0];
};

export const getPostById = async (id) => {
  const { rows: posts } = await connection.query(
    `
    SELECT * FROM posts
    WHERE id = $1 
    `,
    [id]
  );
  return posts[0];
};

export const deletePostById = async (id) => {
  const { rows: posts } = await connection.query(
    `
    DELETE FROM posts
    WHERE id = $1 
    `,
    [id]
  );
  return posts[0];
};

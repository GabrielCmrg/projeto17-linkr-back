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

export const getUserPosts = async (id, userId) => {
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
        ur.description as link_description, 
        p.author_id = $2 as userAuthorship
      FROM posts p 
      JOIN users us ON us.id = p.author_id
      JOIN urls ur ON ur.id = p.url_id
      WHERE p.author_id = $1 
      ORDER BY p.id DESC
      LIMIT 20
    `,
    [id, userId]
  );

  return posts;
};

export const getTagPosts = async (hashtag, userId) => {
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
        ur.description as link_description, 
        p.author_id = $2 as userAuthorship 
      FROM posts p 
      JOIN users us ON us.id = p.author_id
      JOIN urls ur ON ur.id = p.url_id
      JOIN tag_mentions tm ON tm.post_id = p.id
      JOIN tags t ON t.id = tm.tag_id
      WHERE t.name ILIKE $1
      ORDER BY p.id DESC
      LIMIT 20
    `,
    [hashtag, userId]
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

export const editPostById = async (postId, content, urlId) => {
  const { rows: post } = await connection.query(
    `
      UPDATE posts
      SET content = $2, url_id = $3
      WHERE id = $1
      RETURNING *
    `,
    [postId, content, urlId]
  );
  return post[0];
};
export const createPostLike = async (postId, userId) => {
  const { rows: like } = await connection.query(
    `
    INSERT INTO post_likes(post_id, user_id)
    VALUES($1,$2)
  
    `,
    [postId, userId]
  );
  return like[0];
};

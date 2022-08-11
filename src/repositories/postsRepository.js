import connection from '../databases/postgres.js';

export const getPost = async () => {
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
        urls.description as link_description 
      FROM posts
      JOIN users ON users.id = posts.author_id
      JOIN urls ON posts.url_id = urls.id
      ORDER BY id DESC
      LIMIT 20;
    `
  );

  return posts;
};

export const savePostInDatabase = async (userId, content, urlId) => {
  await connection.query(
    `
      INSERT INTO posts(author_id, content, url_id)
      VALUES ($1, $2, $3)
    `,
    [userId, content, urlId]
  );
};

export const saveUrlInDatabase = async (url, title, image, description) => {
  await connection.query(
    `
      INSERT INTO urls(url, title, image, description)
      VALUES ($1, $2, $3, $4)
    `,
    [url, title, image, description]
  );
};

export const getUrl = async (url) => {
  const { rows: urls } = await connection.query(
    `
      SELECT * FROM urls
      WHERE url = $1;
    `,
    [url]
  );
  return urls;
};
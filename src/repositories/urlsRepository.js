import connection from '../databases/postgres.js';

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

export const clearUnmentionedUrls = async () => {
  await connection.query(
    'DELETE FROM urls WHERE id NOT IN (SELECT url_id FROM posts)'
  );
};

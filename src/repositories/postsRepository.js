import connection from '../databases/postgres.js';

<<<<<<< HEAD
async function getPost() {
=======
export async function getPost() {
>>>>>>> teste
  const { rows: posts } = await connection.query(`
    SELECT posts.id, users.name, users.pic_url, posts.content, posts.link 
    FROM posts
    JOIN users ON users.id = posts.author
    ORDER BY id DESC;`);

  return posts;
}

<<<<<<< HEAD
async function savePostInDatabase(userId, content, postLink) {
  return connection.query(
    `
        INSERT INTO posts(author,content,link)
=======
export async function savePostInDatabase(userId, content, postLink) {
  return connection.query(
    `
        INSERT INTO posts(author_id,content,link)
>>>>>>> teste
        VALUES ($1,$2,$3)
    `,
    [userId, content, postLink]
  );
}
<<<<<<< HEAD

export { getPost, savePostInDatabase };
=======
>>>>>>> teste

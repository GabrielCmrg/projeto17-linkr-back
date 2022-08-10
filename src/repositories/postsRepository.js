import connection from '../databases/postgres.js';

async function getPost(){
    const {rows : posts} = await connection.query(`
    SELECT posts.id, users.name, users.pic_url, posts.content, posts.link 
    FROM posts
    JOIN users ON users.id = posts.author
    ORDER BY id DESC;`);

    return posts
}

async function savePostInDatabase(userId,content,postLink){
    return connection.query(`
        INSERT INTO posts(author,content,link)
        VALUES ($1,$2,$3)
    `,[userId, content, postLink]);
};

export { getPost, savePostInDatabase };
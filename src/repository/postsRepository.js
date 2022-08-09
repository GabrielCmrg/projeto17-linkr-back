import {connection} from '../db/database.js';

async function getPost(){
    const {rows : posts} = await connection.query(`
    SELECT posts.id, users.name, users.pic_url, posts.content, posts.link 
    FROM posts
    JOIN users ON users.id = posts.author
    ORDER BY id DESC;`);

    return posts
}

export { getPost };
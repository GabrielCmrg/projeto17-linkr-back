import connection from '../databases/postgres.js';

export const getPosts = async (id) => {
  const { rows: posts } = await connection.query(
    `
    SELECT
    posts.id,
    users.name,
    posts.author_id,
    users.pic_url,
    posts.content,
    urls.url AS link_url,
    urls.title AS link_title,
    urls.image as link_image,
    urls.description as link_description,
    posts.author_id = $1 as userAuthorship,
    COUNT(post_likes.id) as likes_amount,
    $1 IN (SELECT user_id FROM post_likes WHERE post_likes.post_id = posts.id) AS userLiked,
    (SELECT users.name FROM post_likes JOIN users ON users.id = post_likes.user_id WHERE post_likes.user_id <> $1 AND post_likes.post_id = posts.id ORDER BY post_likes.id LIMIT 1) AS firstLike,
    (SELECT users.name FROM post_likes JOIN users ON users.id = post_likes.user_id WHERE post_likes.user_id <> $1 AND post_likes.post_id = posts.id ORDER BY post_likes.id OFFSET 1 LIMIT 1) AS secondLike
  FROM posts
  JOIN users ON users.id = posts.author_id
  JOIN urls ON posts.url_id = urls.id
  LEFT JOIN post_likes ON post_likes.post_id = posts.id
  GROUP BY posts.id, users.name, posts.author_id, users.pic_url, posts.content, urls.url, urls.title, urls.image, urls.description, userAuthorship, userLiked, firstLike, secondLike
  ORDER BY posts.id DESC
  LIMIT 20`,
    [id]
  );

  return posts;
};

export const getUserPosts = async (id, userId) => {
  const { rows: posts } = await connection.query(
    `
      SELECT
        posts.id,
        users.name,
        posts.author_id,
        users.pic_url,
        posts.content,
        urls.url as link_url,
        urls.title as link_title,
        urls.image as link_image,
        urls.description as link_description, 
        posts.author_id = $2 as userAuthorship,
        COUNT(post_likes.id) as likes_amount,
        $2 IN (SELECT user_id FROM post_likes WHERE post_likes.post_id = posts.id) AS userLiked,
        (SELECT users.name FROM post_likes JOIN users ON users.id = post_likes.user_id WHERE post_likes.user_id <> $2 AND post_likes.post_id = posts.id ORDER BY post_likes.id LIMIT 1) AS firstLike,
        (SELECT users.name FROM post_likes JOIN users ON users.id = post_likes.user_id WHERE post_likes.user_id <> $2 AND post_likes.post_id = posts.id ORDER BY post_likes.id OFFSET 1 LIMIT 1) AS secondLike 
      FROM posts  
      JOIN users ON users.id = posts.author_id 
      JOIN urls ON urls.id = posts.url_id 
      LEFT JOIN post_likes ON post_likes.post_id = posts.id 
      WHERE posts.author_id = $1 
      GROUP BY posts.id, users.name, posts.author_id, users.pic_url, posts.content, urls.url, urls.title, urls.image, urls.description, userAuthorship, userLiked, firstLike, secondLike 
      ORDER BY posts.id DESC
      LIMIT 20
    `,
    [id, userId]
  );

  return posts;
};

export const getTagPosts = async (hashtag, userId) => {
  const searchHashtag = "#" + hashtag
  const { rows: posts } = await connection.query(
    `
      SELECT
        posts.id,
        users.name,
        posts.author_id,
        users.pic_url,
        posts.content,
        urls.url as link_url,
        urls.title as link_title,
        urls.image as link_image,
        urls.description as link_description, 
        posts.author_id = $2 as userAuthorship,
        COUNT(post_likes.id) as likes_amount,
        $2 IN (SELECT user_id FROM post_likes WHERE post_likes.post_id = posts.id) AS userLiked,
        (SELECT users.name FROM post_likes JOIN users ON users.id = post_likes.user_id WHERE post_likes.user_id <> $2 AND post_likes.post_id = posts.id ORDER BY post_likes.id LIMIT 1) AS firstLike,
        (SELECT users.name FROM post_likes JOIN users ON users.id = post_likes.user_id WHERE post_likes.user_id <> $2 AND post_likes.post_id = posts.id ORDER BY post_likes.id OFFSET 1 LIMIT 1) AS secondLike 
      FROM posts  
      JOIN users ON users.id = posts.author_id
      JOIN urls ON urls.id = posts.url_id
      JOIN tag_mentions ON tag_mentions.post_id = posts.id
      JOIN tags ON tags.id = tag_mentions.tag_id 
      LEFT JOIN post_likes ON post_likes.post_id = posts.id 
      WHERE tags.name ILIKE $1
      GROUP BY posts.id, users.name, posts.author_id, users.pic_url, posts.content, urls.url, urls.title, urls.image, urls.description, userAuthorship, userLiked, firstLike, secondLike 
      ORDER BY posts.id DESC
      LIMIT 20
    `,
    [searchHashtag, userId]
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

export const createPostDislike = async (postId, userId) => {
  const { rows: dislike } = await connection.query(
    `
    DELETE FROM post_likes
    WHERE post_id = $1 AND user_id = $2
    
    `,
    [postId, userId]
  );
  return dislike;
};

export const deleteAllLikesFromThepost = async(postId) =>{
  const { rows: deleteLikes } = await connection.query(
    `
    DELETE FROM post_likes
    WHERE post_id = $1 
    
    `,
    [postId]
  );
    return deleteLikes;
};

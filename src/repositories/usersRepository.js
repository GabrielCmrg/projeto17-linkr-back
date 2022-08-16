import connection from '../databases/postgres.js';

export const createUser = async (userObject) => {
  const { email, name, password, picUrl } = userObject;
  await connection.query(
    'INSERT INTO users (email, name, password, pic_url) VALUES ($1, $2, $3, $4)',
    [email, name, password, picUrl]
  );
};

export const getUserById = async (userId) => {
  const { rows: user } = await connection.query(
    'SELECT * FROM users u WHERE u.id = $1',
    [userId]
  );
  return user[0];
};

export const getUserByEmail = async (email) => {
  const { rows: user } = await connection.query(
    'SELECT * FROM users WHERE email = $1',
    [email]
  );
  return user[0];
};

export const getUsersByName = async (search) => {
  const { rows: users } = await connection.query(
    `SELECT id, name, pic_url FROM users WHERE name ILIKE $1||'%'`,
    [search]
  );
  return users;
};

export const followUser = async (followed_id, follower_id) => {
  await connection.query(
    `INSERT INTO follows (followed_id, follower_id) VALUES ($1, $2)`,
    [followed_id, follower_id]
  );
};

export const unfollowUser = async (followed_id, follower_id) => {
  await connection.query(
    `DELETE FROM follows WHERE followed_id = $1 AND follower_id = $2`,
    [followed_id, follower_id]
  );
};

export const checkFollowStatus = async (followed_id, follower_id) => {
  const { rows: followStatus } = await connection.query(
    'SELECT * FROM follows WHERE followed_id = $1 AND follower_id = $2',
    [followed_id, follower_id]
  );
  return followStatus[0];
};
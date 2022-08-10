import connection from '../databases/postgres.js';

export const createUser = async (userObject) => {
  const { email, name, password, picUrl } = userObject;
  await connection.query(
    'INSERT INTO users (email, name, password, pic_url) VALUES ($1, $2, $3, $4)',
    [email, name, password, picUrl]
  );
};

export const getUserByEmail = async (email) => {
  const { rows: user } = await connection.query(
    'SELECT * FROM users WHERE email = $1',
    [email]
  );
  return user[0];
};

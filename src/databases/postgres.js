import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const user = 'postgres';
const password = '123456';
const host = 'localhost';
const port = 5432;
const database = 'linkr';

// const { Pool } = pg;
// const connection = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });

const { Pool } = pg;
const connection = new Pool({
  user,
  password,
  host,
  port,
  database,
});

export default connection;

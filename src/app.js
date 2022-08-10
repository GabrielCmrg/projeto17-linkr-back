import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import router from './routers/index.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

const { PORT } = process.env;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

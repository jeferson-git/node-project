/* eslint-disable prettier/prettier */
import { config } from 'dotenv';
config();

export default () => ({
  database: {
    host: config().parsed.DB_HOST,
    username: config().parsed.DB_USERNAME,
    password: config().parsed.DB_PASSWORD,
    database:config().parsed.DB_DATABASE,
    port:config().parsed.DB_PORT
  },
});

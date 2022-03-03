require('dotenv').config();

module.exports = {
  NODE_ENV: process.env.NODE_ENV,
  HTTP_PORT: process.env.HTTP_PORT,
  PG_HOST: process.env.PG_HOST,
  PG_PORT: process.env.PG_PORT,
  PG_USER: process.env.PG_USER,
  PG_PASSWORD: process.env.PG_PASSWORD,
  PG_DATABASE: process.env.PG_DATABASE,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN
};

// you can get data from env and you should store here

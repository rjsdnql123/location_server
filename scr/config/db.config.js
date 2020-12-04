require('dotenv').config();
module.exports = {
    HOST: "localhost",
    USER: process.env.USERROOT,
    PASSWORD: process.env.MYSQL_PASSWORD,
    DB: process.env.DB,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
const mysql = require('mysql');
const dbConfig = require('./mysql-config');

const connection = mysql.createConnection(
    {
        host: dbConfig.HOST,
        user: dbConfig.USER,
        database: dbConfig.DB,
        password: dbConfig.PASSWORD,
    }
);

connection.connect();
module.exports = connection;
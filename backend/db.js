const mysql = require('mysql2');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1a,2b.3c,4d.',
    database: 'FAQ_FINAL',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
}).promise();

module.exports = db;

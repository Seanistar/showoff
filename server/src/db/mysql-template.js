const mysql = require('mysql');

const connector = process.env.NODE_ENV === 'production' ?
  mysql.createConnection({
    host: '',
    user: '',
    password: '',
    database: ''
  }) :
  mysql.createPool({
    connectionLimit : 10,
    host: '',
    user: '',
    password: '',
    database: ''
  })

process.env.NODE_ENV === 'production' ? setInterval(() => { connector.query('SELECT 1')}, 5000) : null;

// console.log(connector)
module.exports = connector;
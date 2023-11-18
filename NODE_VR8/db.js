var knex = require('knex');

var db = knex({
  client: 'mysql',
  connection: {
    host : 'localhost',
    port : 3306,
    user : 'root',
    password : 'root',
    database : 'musicas'
  }
});

module.exports = db;

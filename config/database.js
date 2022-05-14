const { Sequelize } = require('sequelize');
//Passing parameters separately (other dialects)
module.exports = new Sequelize(process.env.database, process.env.username, process.env.password, {
  host: process.env.host,
  port:process.env.dbport,
  dialect:process.env.dialect, 

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});
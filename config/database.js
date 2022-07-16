require("dotenv").config({ path: "./.env" })

const { Sequelize } = require('sequelize');
const db = new Sequelize(process.env.database, process.env.username, process.env.password, {
    host: process.env.host,
    dialect: process.env.dialect,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

module.exports = db;
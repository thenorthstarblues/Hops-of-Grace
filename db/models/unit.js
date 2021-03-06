'use strict';

const Sequelize = require('sequelize');
const db = require('APP/db');

const Unit = db.define('units', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  }
})

module.exports = Unit;

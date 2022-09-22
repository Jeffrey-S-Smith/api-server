'use strict';
const foodSchema = require('./food.js');

// const Collection = require('./Collection.js');

const { Sequelize, DataTypes } = require('sequelize');

const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite::memory:' : process.env.DATABASE_URL;

let herokuOptions = {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
};
console.log(DATABASE_URL);
let sequelize = new Sequelize(DATABASE_URL, herokuOptions);

const FoodModel = foodSchema(sequelize, DataTypes);


module.exports = {
  db: sequelize,
  Food: FoodModel,
};
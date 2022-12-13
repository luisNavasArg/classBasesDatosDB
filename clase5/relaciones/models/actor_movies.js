'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class actor_movies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  actor_movies.init({
    actor_id: DataTypes.INTEGER,
    movie_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'actor_movies',
  });
  return actor_movies;
};
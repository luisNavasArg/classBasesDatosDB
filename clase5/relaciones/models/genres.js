'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class genres extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // genres.associate=function (models) {
        genres.hasMany(models.movies,{
          as:'movies',
          foreignKey:'genre_id'
        })
        
      // }
    }
  }
  genres.init({
    name: DataTypes.STRING,
    ranking: DataTypes.INTEGER,
    active: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'genres',
  });
  return genres;
};
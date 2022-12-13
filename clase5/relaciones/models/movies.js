'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class movies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //de peliculas a generos
      //de peliculas a actores
      // movies.associate=function (models) {
          movies.belongsToMany(models.actores,{
            as:'actors',
            through:'actor_movies',
            foreignKey:'movie_id',
            otherKey:'actor_id',
            timestamps:false
          }),
          movies.belongsTo(models.genres,{
            as:'genre',
            foreignKey:'genre_id'
          })
      // }
    }
  }
  movies.init({
    title: DataTypes.STRING,
    rating: DataTypes.DECIMAL,
    awards: DataTypes.INTEGER,
    release_date: DataTypes.DATE,
    length: DataTypes.INTEGER,
    genre_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'movies',
  });
  return movies;
};
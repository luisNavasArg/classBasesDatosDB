'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class actores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      movies.belongsToMany(models.actores,{
        as:'movies',
        through:'actor_movies',
        foreignKey:'actor_id',
        otherKey:'movie_id',
        timestamps:false
      })
    }
  }
  actores.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    rating: DataTypes.DECIMAL,
    favorite_movie_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'actores',
  });
  return actores;
};
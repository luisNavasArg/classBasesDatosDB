'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mascotas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  mascotas.init({
    nombre: DataTypes.STRING,
    color: DataTypes.STRING,
    especie: DataTypes.STRING,
    edad: DataTypes.INTEGER,
    id_duenio: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'mascotas',
  });
  return mascotas;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class direcciones extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  direcciones.init({
    id_duenio: DataTypes.INTEGER,
    duenio: DataTypes.STRING,
    calle: DataTypes.STRING,
    altura: DataTypes.INTEGER,
    piso: DataTypes.INTEGER,
    depto: DataTypes.STRING,
    ciudad: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'direcciones',
  });
  return direcciones;
};
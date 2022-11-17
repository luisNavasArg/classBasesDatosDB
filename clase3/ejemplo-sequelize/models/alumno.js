'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class alumno extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  alumno.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    aula: DataTypes.STRING,
    curso: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'alumno',
  });
  return alumno;
};
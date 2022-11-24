'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class turnos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  turnos.init({
    id_mascota: DataTypes.INTEGER,
    id_duenio: DataTypes.INTEGER,
    fecha_turno: DataTypes.DATE,
    fecha_actual: DataTypes.DATE,
    estatus: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'turnos',
  });
  return turnos;
};
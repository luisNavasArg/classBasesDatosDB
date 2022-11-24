'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('turnos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_mascota: {
        type: Sequelize.INTEGER
      },
      id_duenio: {
        type: Sequelize.INTEGER
      },
      fecha_turno: {
        type: Sequelize.DATE
      },
      fecha_actual: {
        type: Sequelize.DATE
      },
      estatus: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('turnos');
  }
};
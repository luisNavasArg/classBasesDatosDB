'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('direcciones', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_duenio: {
        type: Sequelize.INTEGER
      },
      duenio: {
        type: Sequelize.STRING
      },
      calle: {
        type: Sequelize.STRING
      },
      altura: {
        type: Sequelize.INTEGER
      },
      piso: {
        type: Sequelize.INTEGER
      },
      depto: {
        type: Sequelize.STRING
      },
      ciudad: {
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
    await queryInterface.dropTable('direcciones');
  }
};
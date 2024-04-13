"use strict";/** @type {import('sequelize-cli').Migration} */

// migration criada para alterar uma tabela ja existente no banco de dados,
// nesse caso está sendo alterado características do atributo email da tabela user
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.changeColumn(
      'alunos',
      'email',
      {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
    );
  },

  async down() {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};

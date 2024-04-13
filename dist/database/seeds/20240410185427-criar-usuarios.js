"use strict";/** @type {import('sequelize-cli').Migration} */
const bcryptjs = require('bcryptjs');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          nome: 'alan',
          email: 'alan@gmail.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'alan2',
          email: 'alan2@gmail.com',
          password_hash: await bcryptjs.hash('4545543', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'alan2',
          email: 'alan3@gmail.com',
          password_hash: await bcryptjs.hash('34534535', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  async down() {
    // await queryInterface.bulkDelete('users', null, {});
  },
};

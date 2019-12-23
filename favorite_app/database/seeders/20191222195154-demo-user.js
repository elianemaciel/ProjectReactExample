'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('Users', [{
        name: "Eliane",
        username: "eliane",
        email: "eliane.faveron@gmail.com",
        password: "eli@1901",
        createdAt: new Date(),
        updatedAt: new Date(),
      },], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};

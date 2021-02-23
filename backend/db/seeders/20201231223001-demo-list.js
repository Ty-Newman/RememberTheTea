'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Lists', [
      {
        listName: 'Cleaning',
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        listName: 'Shopping',
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        listName: 'Marketing',
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        listName: 'Chores',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        listName: 'Training',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        listName: 'Music',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        listName: 'Fights',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
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

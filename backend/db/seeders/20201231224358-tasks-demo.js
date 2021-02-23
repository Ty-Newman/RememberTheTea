'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tasks', [
      {
        taskName: 'Sweep the shop floor',
        listId: 1,
        note: 'Sharing tea with a fascinating stranger is one of life’s true delights.',
        dueDate: new Date(),
        priority: 2,
        isCompleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        taskName: 'Wipe down the tables',
        listId: 1,
        note: 'Pride is not the opposite of shame, but its source.',
        dueDate: new Date(),
        priority: 1,
        isCompleted: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        taskName: 'Buy new spark rocks',
        listId: 2,
        note: 'Sometimes life is like this tunnel. You can’t always see the light at the end of the tunnel, but if you keep moving, you will come to a better place.',
        dueDate: new Date(),
        priority: 1,
        isCompleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        taskName: 'Get a new kettle for the collection',
        listId: 2,
        note: 'Life happens wherever you are, whether you make it or not.',
        dueDate: new Date(),
        priority: 4,
        isCompleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        taskName: 'Teach Zuko to redirect lightning',
        listId: 5,
        note: 'It is important to draw wisdom from many different places.',
        dueDate: new Date(),
        priority: 1,
        isCompleted: false,
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

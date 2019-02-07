'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    // Message belongsTo Device
    return queryInterface.addColumn(
      'messages',
      'deviceId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'devices',
          key: 'id',
        },
        allowNull: false
      }
    );

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'messages',
      'deviceId'
    );
  }
};

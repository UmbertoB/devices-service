module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.addColumn(
      'environments',
      'deviceId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'devices',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }
    );

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.removeColumn(
      'environments',
      'deviceId'
    );
    
  }
};
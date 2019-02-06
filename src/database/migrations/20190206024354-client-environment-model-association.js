module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.addColumn(
      'environments',
      'clientId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'clients',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.removeColumn(
      'environments',
      'clientId'
    );
    
  }
};
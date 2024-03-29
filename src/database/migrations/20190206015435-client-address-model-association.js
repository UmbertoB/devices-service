module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.addColumn(
      'addresses',
      'clientId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'clients',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false
      }
    );

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.removeColumn(
      'addresses',
      'clientId'
    );
    
  }
};
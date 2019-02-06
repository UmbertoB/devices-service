'use strict';
module.exports = (sequelize, DataTypes) => {
  const environment = sequelize.define('environment', {
    title: {
      type: DataTypes.STRING,
      unique: true
    }
  }, {});
  environment.associate = function (models) {
    environment.belongsTo(models.device, { onDelete: 'cascade', allowNull: false });
  };
  return environment;
};
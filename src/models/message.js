'use strict';
module.exports = (sequelize, DataTypes) => {
  const message = sequelize.define('message', {
    temperature: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  message.associate = function(models) {

    message.belongsTo(models.device, { foreignKey: 'deviceId', allowNull: false });

  };
  return message;
};
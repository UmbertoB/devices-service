'use strict';
module.exports = (sequelize, DataTypes) => {
  const device = sequelize.define('device', {
    updateTime: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
  }, {});
  device.associate = function(models) {
    device.hasOne(models.environment, { onDelete: 'cascade', allowNull: false });

    device.hasMany(models.message, { onDelete: 'cascade', foreignKey: 'deviceId', allowNull: false });

  };
  return device;
};
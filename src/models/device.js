'use strict';
module.exports = (sequelize, DataTypes) => {
  const device = sequelize.define('device', {
  }, {});
  device.associate = function(models) {
    device.hasOne(models.environment, { onDelete: 'cascade', allowNull: false });
  };
  return device;
};
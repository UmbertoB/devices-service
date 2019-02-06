'use strict';
module.exports = (sequelize, DataTypes) => {
  const client = sequelize.define('client', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  client.associate = function (models) {
    client.hasOne(models.address, { onDelete: 'cascade', allowNull: false });

    client.hasMany(models.environment, { onDelete: 'cascade', foreignKey: 'clientId', allowNull: false });


  };
  return client;
};
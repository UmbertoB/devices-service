'use strict';
module.exports = (sequelize, DataTypes) => {
  const client = sequelize.define('client', {
    name: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {});
  client.associate = function(models) {
    client.hasOne(models.address, { onDelete: 'cascade' });

    client.hasMany(models.environment, { onDelete: 'cascade', foreignKey:'clientId' });


  };
  return client;
};
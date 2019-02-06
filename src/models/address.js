'use strict';
module.exports = (sequelize, DataTypes) => {
  const address = sequelize.define('address', {
    city: DataTypes.STRING,
    district: DataTypes.STRING,
    street: DataTypes.STRING,
    number: DataTypes.INTEGER,
    complement: DataTypes.STRING,
    zip_code: DataTypes.STRING
  }, {});
  address.associate = function(models) {
    // associations can be defined here
  };
  return address;
};
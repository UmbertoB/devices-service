'use strict';
module.exports = (sequelize, DataTypes) => {
  const environment = sequelize.define('environment', {
    title: DataTypes.STRING
  }, {});
  environment.associate = function(models) {
    // associations can be defined here
  };
  return environment;
};
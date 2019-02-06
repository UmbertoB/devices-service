'use strict';
module.exports = (sequelize, DataTypes) => {
  const message = sequelize.define('message', {
    temperature: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  message.associate = function(models) {
    // associations can be defined here
  };
  return message;
};
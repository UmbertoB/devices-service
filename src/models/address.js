'use strict';
module.exports = (sequelize, DataTypes) => {
  const address = sequelize.define('address', {
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    district: {
      type: DataTypes.STRING,
      allowNull: false
    },
    street: {
      type: DataTypes.STRING,
      allowNull: false
    },
    number: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    complement: {
      type: DataTypes.STRING,
      allowNull: false
    },
    zip_code: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  address.associate = function (models) {
    // associations can be defined here
  };
  return address;
};
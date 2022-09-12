const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("user", {
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
   
    identification: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    date: {
      type: DataTypes.DATE,

    },
 
  });
};

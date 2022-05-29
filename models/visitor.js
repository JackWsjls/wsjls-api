'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Visitor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Visitor.init({
    name: DataTypes.STRING,
    logo: DataTypes.STRING,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    create_time: DataTypes.DATE,
    update_time: DataTypes.DATE,
    status: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    }
  }, {
    timestamps: false,
    sequelize,
    modelName: 'Visitor',
  });
  return Visitor;
};
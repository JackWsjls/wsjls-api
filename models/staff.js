'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class staff extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  staff.init({
    account: DataTypes.STRING,
    password: DataTypes.STRING,
    status: DataTypes.STRING,
    did: DataTypes.INTEGER,
    name: DataTypes.STRING,
    sex: DataTypes.STRING,
    idNumber: DataTypes.STRING,
    workTime: DataTypes.DATE,
    leaveTime: DataTypes.DATE,
    bornDate: DataTypes.DATE,
    info: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'staff',
  });
  return staff;
};
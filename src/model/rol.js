const { Model, Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('registro', 'root', '123456789', {
  host: 'localhost',
  dialect: 'mysql'
});

class Rol extends Model {}

Rol.init({
  role_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  Nombre: {
    type: DataTypes.STRING(50)
  }
}, {
  sequelize,
  modelName: 'Rol'
});

module.exports = Rol;

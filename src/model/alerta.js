const { Model, Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('registro', 'root', '123456789', {
  host: 'localhost',
  dialect: 'mysql'
});

class alerta extends Model {}

alerta.init({
    Alertaid: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  Nombre: {
    type: DataTypes.STRING
  }
}, {
  sequelize,
  modelName: 'alerta'
});

module.exports = alerta;
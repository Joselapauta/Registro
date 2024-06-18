const { Model, Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('registro', 'root', '123456789', {
  host: 'localhost',
  dialect: 'mysql'
});

class usuario extends Model {}

usuario.init({
  usuario_id: {
    type: DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey: true
  },
  Nombre: {
    type: DataTypes.STRING(50)
  },
  rol_id: {
    type: DataTypes.INTEGER
  }, 
  Alerta_id: {
    type: DataTypes.INTEGER
  },
  Comando: {
    type: DataTypes.STRING
  },
  Rango: {
    type: DataTypes.STRING(150)
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  }
}, {
  sequelize,
  modelName: 'Usuario',
  timestamps: true
});

module.exports = usuario;


/*async function testconnection(){
try {
    await sequelize.authenticate();
    console.log('Conexion realizada con exito.');
} catch (error) {
    console.error('Error en la conexion a la base de datos:', error);
}

}

testconnection();*/
const usuario = require('./usuarios');
const Rol = require('./rol');
const alerta = require('./alerta')


usuario.belongsTo(Rol, { foreignKey: 'role_id' });
Rol.hasMany(usuario, { foreignKey: 'role_id' });

usuario.belongsTo(alerta, { foreignKey: 'Alerta_id' });
alerta.hasMany(usuario, { foreignKey: 'Alerta_id' });


module.exports = {
  usuario,
  Rol,
  alerta
};


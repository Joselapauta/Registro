const express = require('express');
const app = express();
const { usuario, Rol, alerta } = require('../model/indexbd');
const path = require("path");
app.set("view engine", "ejs");
app.set(path.join(__dirname, 'views'));
app.use(express.static('public'));


app.use(express.json());

app.post('/agregar', async (req, res) => {
  const { Nombre, Comando, Rango,rol_id,Alerta_id } = req.body;
  await usuario.sync();
  const buscaProducts = await usuario.create({
    //userid: userid,
    Nombre: Nombre,
    Comando: Comando,
    Rango: Rango,
    rol_id: rol_id,
    Alerta_id: Alerta_id,
  });

  res.status(201).json(buscaProducts);
});

app.post('/agregarrol', async (req, res) => {
  const { Nombre,role_id} = req.body;
  await Rol.sync();
  const agregarol = await Rol.create({
    Nombre: Nombre,
    role_id: role_id
    
  });

  res.status(201).json(agregarol);
});

app.post('/crearalerta', async (req, res) => {
  const { Nombre} = req.body;
  await alerta.sync();
  const agregaralerta = await alerta.create({
    Nombre: Nombre
  });

  res.status(201).json(agregaralerta);
});

app.get("/Alertas", (req, res) => {
  res.render("base");
});

app.get("/decomisoMercancias", (req, res) => {
  res.render("decomisoMercancias");
});

module.exports = app;

const express = require('express');
const app = express();
require('dotenv').config();
const morgan = require('morgan');
const port = process.env.PORT;
const apli = require('../app/app.js')

//middlewer
app.use(morgan('dev'))

app.use('/api/v1', apli)



app.listen(port,()=>{
    console.log(`--servidor encendido en el puerto ${port}---`)
})
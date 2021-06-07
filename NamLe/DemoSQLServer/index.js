const express = require('express');
const app= express();
const cors = require('cors');
const bodyparser= require('body-parser');
const con=require('./config/db');

//Router
const hotel=require('./router/routes');
const city=require('./router/city');
const room=require('./router/room');
 
const PORT = 2000

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors())

//Site /:slug
app.use('/hotel',hotel);
app.use('/city',city);
app.use('/hotel/room',room);
 
 
var server = app.listen(PORT, () => console.log(`Server is starting at port ${PORT}`));

module.exports = app;
const express = require('express')
require('dotenv').config()
const cors = require('cors')
const {db} = require('./db/db')

//const routes = require('./routes/routes')

const app = express()
//console.log("Backend connected")


/*---------- Connection with PORT ------------*/

const server = () => {
    db();
    app.listen(process.env.PORT, () => {
      console.log("listening to port ", process.env.PORT);
    });
  };
  
  server();

 /*---------- Don't Touch above part ------------*/

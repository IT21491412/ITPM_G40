const express = require('express');
require('dotenv').config();
const cors = require('cors');
const {db} = require('./db/db');
const bodyParser = require('body-parser');


const app = express()
//console.log("Backend connected")



/*---------- MiddleWares ------------*/

app.use(express.json());
app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies




/*---------- Kisal ------------*/
const questionRoutes = require('./routes/questionsRoutes');
app.use('/api',questionRoutes);

app.use('/question', questionRoutes);






/*---------- Connection with PORT ------------*/

const server = () => {
    db();
    app.listen(process.env.PORT, () => {
      console.log("Server is running on port ", process.env.PORT);
    });
  };
  
  server();

 /*---------- Don't Touch above part ------------*/

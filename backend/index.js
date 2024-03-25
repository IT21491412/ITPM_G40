const express = require("express");
require('dotenv').config()
const cors = require("cors");
const connectDb = require("./config/db");

/* ============================= Import Routes ============================= */
/*  -- Common -- */
const AuthRoutes = require("./routes/authRoutes");

/*  -- Udula -- */

/*  -- Kisal -- */

/*  -- Rusiru -- */
const HistoryRoutes = require("./routes/historyRoutes");

/*  -- Menura -- */

/* ======================================================================== */

// express app
const app = express();

// middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

//Log the requests
app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});


/* ================================ Routes ================================ */
/*  -- Common -- */
app.use("/api/auth", AuthRoutes);

/*  -- Udula -- */

/*  -- Kisal -- */

/*  -- Rusiru -- */
app.use("/api/history", HistoryRoutes);

/*  -- Menura -- */


/* ======================================================================== */


// connect to db
connectDb();

const PORT = process.env.PORT || 5000;

// listen for requests
app.listen(PORT, console.log(`Server running on port ${PORT}`));

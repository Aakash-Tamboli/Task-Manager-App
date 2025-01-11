const express = require("express");
const cors = require("cors");
const dotEnv = require("dotenv");
const { configureDB } = require("./Configs/ConfigDB");
const { router } = require("./Routes/Task");

const app = express();

// Config
dotEnv.config();
const PORT = process.env.PORT;

// middlewares
app.use(cors());
app.use(express.json());
app.use("/api", router);

configureDB(app, PORT);

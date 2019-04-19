const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const router = require("./router");

// DB Setup
mongoose.connect("mongodb://localhost:auth/auth", { useNewUrlParser: true });

// App Setup
app.use(morgan("combined"));
app.use(bodyParser.json({ type: "*/*" }));
app.use(cors());
router(app);

// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log("Server listening on Port: " + port);

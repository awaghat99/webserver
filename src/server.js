require("dotenv").config();
require("./db/connection");

const express = require("express");
const cors = require("cors");
const port = process.env.PORT;

const bookRouter = require("./routes/routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use(bookRouter);

app.listen(port, () => console.log(`server is listening on ${port}`));

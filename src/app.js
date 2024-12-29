require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");

const app = express();

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use(cookieParser());
app.set("trust proxy", 1);

app.use(bodyParser.json());

const apiRouter = require("./router/api");
const frontRouter = require("./router/front");

app.get("/show", (req, res) => {
  res.status(200).render("show");
});

app.use("/api/v1", apiRouter);
app.use("/", frontRouter);

const connectToDb = require("./config/database");

connectToDb(() => {
  app.listen(3001, () => {
    console.log(`server listening on : 3001`);
  });
});

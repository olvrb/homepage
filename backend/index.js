const express = require("express");
const bodyParser = require("body-parser");
const { homepageController } = require("./controllers/homepageController");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static(path.join(__dirname, "../public")));

app.get("/", homepageController);

app.listen(3220, () => {
    console.log(`Listening on port 3220: http://localhost:3220`);
});

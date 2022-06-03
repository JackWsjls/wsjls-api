const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const models = require("../models")

require("./visitor")(app, models)
require("./departments")(app, models)
require("./staffs")(app, models)

// visitor(app, models)

app.listen("1000", () => {
  console.log("启动服务")
})
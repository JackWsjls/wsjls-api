const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const models = require("./models")
/**
 * @description 创建数据
 */
app.post("/create", async (req, res, next) => {
  let { name, logo, title, content, create_time, update_time, status } = req.body;
  console.log({ name, logo, title, content, create_time, update_time, status })
  // 数据持久化
  try {
    let result = await models.Visitor.create({ name, logo, title, content, create_time, update_time, status })
    res.json({
      code: "10000",
      message: "创建成功",
      result,
    })
  } catch (err) { next(err) }
  
})

app.listen("1000", () => {
  console.log("启动服务")
})
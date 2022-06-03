module.exports = (app, models) => {
  /**
   * @description 创建数据
   */
  app.post("/department/create", async (req, res, next) => {
    let { name, address } = req.body;
    console.log({ name, address })
    // 数据持久化
    try {
      let result = await models.Department.create({ name, address })
      res.json({
        code: "10000",
        message: "创建成功",
        result,
      })
    } catch (err) { next(err) }
  })
}
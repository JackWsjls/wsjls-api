module.exports = (app, models) => {
  /**
   * @description 创建数据
   */
  app.post("/staffs/create", async (req, res, next) => {
    let { account, password, status, did, name, sex, idNumber, workTime, leaveTime, bornDate, info } = req.body;
    // 数据持久化
    try {
      let result = await models.staff.create({ account, password, status, did, name, sex, idNumber, workTime, leaveTime, bornDate, info })
      res.json({
        code: "10000",
        message: "创建成功",
        result,
      })
    } catch (err) { next(err) }
  })
}
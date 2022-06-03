# wsjls.api

## 初始化项目

```bash
# 初始化项目
`npm install express mysql2 sequelize sequelize-cli nodemon body-parser -s`
# 初始化数据库配置信息
`npx sequelize init`
# 生成模型文件
`npx sequelize model:generate --name Visitor --attributes name:string,logo:string,title:string,content:string,create_time:date,update_time:date,status:integer`
# 持久化，模型对应的【数据库表】
`npx sequelize db:migrate`
# 新建服务文件app.js
```

## 联系增加表

<!-- 部门 -->
`npx sequelize model:generate --name Department --attributes name:string,address:string`
<!-- 员工 -->
`npx sequelize model:generate --name staff --attributes account:string,password:string,status:string,did:integer,name:string,sex:string,idNumber:string,workTime:date,leaveTime:date,bornDate:date,info:string`

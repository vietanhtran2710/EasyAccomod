const dbConfig = require("../config/db.config.js");

const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

let test = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  // await sequelize.sync({ force: true })
  console.log("All models were synchronized successfully.")
}

rooms = require("./room/rooms.model")(sequelize, DataTypes)
roomCost = require("./room/roomCost.model")(sequelize, DataTypes)
roomUtils = require("./room/roomUtils.model")(sequelize, DataTypes)
roomAddress = require("./room/roomAddress.model")(sequelize, DataTypes)
posts = require("./post/posts.model")(sequelize, DataTypes)
postCost = require("./post/postCost.model")(sequelize, DataTypes)
accounts = require("./account.model")(sequelize, DataTypes)
users = require("./user.model")(sequelize, DataTypes)

// Liên kết 1 - 1
rooms.hasOne(roomCost, { foreignKey: { name: "roomID" } }) // Giá tương ứng với 1 phòng
roomUtils.belongsTo(rooms, { foreignKey: { name: "roomID" } }) // Điều kiện vật chất của 1 phòng
roomAddress.belongsTo(rooms, { foreignKey: 'roomID' }) // Địa chỉ của phòng trọ 
posts.belongsTo(rooms, { foreignKey: 'roomID' }) // 1 phòng trọ có 1 bài đăng
accounts.belongsTo(users, { foreignKey: 'userIdCard', onDelete: 'CASCADE' }) // 1 người dùng chỉ có 1 tài khoản duy nhất

// Liêt kết 1 - n
accounts.hasMany(posts) // 1 tài khoản chủ trọ có nhiều bài đăng
accounts.hasMany(rooms) // 1 chủ trọ có thể có nhiều phòng

test()

const db = {
  rooms,
  roomCost,
  roomUtils,
  roomAddress,
  posts,
  postCost,
  accounts,
  users
};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;
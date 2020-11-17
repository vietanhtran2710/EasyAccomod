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

  await sequelize.sync({ force: true })
  console.log("All models were synchronized successfully.")
}

Rooms = require("./room/rooms.model")(sequelize, DataTypes)
RoomCost = require("./room/roomCost.model")(sequelize, DataTypes)
RoomUtils = require("./room/roomUtils.model")(sequelize, DataTypes)
RoomAddress = require("./room/roomAddress.model")(sequelize, DataTypes)
Posts = require("./post/posts.model")(sequelize, DataTypes)
PostCost = require("./post/postCost.model")(sequelize, DataTypes)

Rooms.hasOne(RoomCost, { foreignKey: { name: "roomID" } })
RoomUtils.belongsTo(Rooms, { foreignKey: {  name: "roomID" } })
RoomAddress.belongsTo(Rooms, { foreignKey: 'roomID' })
Posts.belongsTo(Rooms, { foreignKey: 'roomID' })

test()
const db = {
  Rooms,
  RoomCost,
  RoomUtils,
  RoomAddress,
  Posts,
  PostCost
};

module.exports = db;
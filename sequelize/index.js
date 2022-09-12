const { Sequelize } = require("sequelize");

const config = require("../config/index");

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  operatorsAliases: 0,
  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
});
const modelDefiners = [require("./models/user.model")];

// Se definen los modelos de acuerdo a estos archivos
for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize);
}



module.exports = sequelize;

const app = require("./app");
const sequelize = require("./sequelize");

async function assertDatabaseConnectionOk() {
  console.log(`Checking database connection...`);
  try {
    await sequelize.authenticate();
    console.log("Database connection OK!");
  } catch (error) {
    console.log("Unable to connect to the database:");
    console.log(error.message);
    process.exit(1);
  }
}

async function init() {
  await assertDatabaseConnectionOk();
  await sequelize.sync();

  app.listen(app.get("port"), () => {
    console.log(`Express server started on port ${app.get("port")}. `);
  });
}

init();

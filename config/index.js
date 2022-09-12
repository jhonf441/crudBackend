module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "santi1234",
    DB: "user_crud",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  
 
  };
  
const config = require("../config");
const { models } = require("../sequelize");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const sequelize = require("sequelize");

const controller = {
  create: async (req, res) => {
    console.log(req.body);
    const { identification, name, date } = req.body;

    const responseFind = await models.user.findOne({ where: { identification: identification } });


    if (responseFind)
    return res.status(400).send({
      message: `Ya existe un usuario registrado con número : ${responseFind.dataValues.identification}.`,
    });
    const response = await models.user.create({
      name: name,
      identification: identification,
      date: date,
    });

    return res.status(200).send("Usario creado");
  },

  edit: async (req, res) => {
    console.log(req.body)
    const { id, identification, name, date} = req.body;

    const responseFind = await models.user.findOne({ where: { identification: identification } });


    if (responseFind)
    return res.status(400).send({
      message: `Ya existe un usuario registrado con número : ${responseFind.dataValues.identification}.`,
    });

    const response = await models.user.update(
      {
        identification: identification,
        date: date,
        name: name,
      },
      { where: { id: id } }
    );

    return res.status(200).send("Usario editado");
  },

  read: async (req, res) => {
    const { id } = req.params;

    const response = await models.user.findOne({ where: { id: id } });

    return res.status(200).send([response]);
  },

  delete: async (req, res) => {
    const { id } = req.params;

    const response = await models.user.destroy({ where: { id: id } });

    return res.status(200).send("Eliminado correctamente");
  },

  getAll: async (req, res) => {
    const response = await models.user.findAll();

    return res.status(200).send(response);
  },
};

module.exports = controller;

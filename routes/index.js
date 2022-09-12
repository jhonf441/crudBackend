const express = require("express");
const router = express.Router();
const controller = require("../controllers");
const makeHandlerAwareOfAsyncErrors = require("./helpers");


router.post("/create", makeHandlerAwareOfAsyncErrors(controller.create));

router.get(
  "/read/:id",

  makeHandlerAwareOfAsyncErrors(controller.read)
);

router.delete(
  "/delete/:id",
  makeHandlerAwareOfAsyncErrors(controller.delete)
);

router.patch(
  "/edit",
  makeHandlerAwareOfAsyncErrors(controller.edit)
);

router.get(
  "/getAll",

  makeHandlerAwareOfAsyncErrors(controller.getAll)
);
module.exports = router;

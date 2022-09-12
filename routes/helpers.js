function makeHandlerAwareOfAsyncErrors(handler) {
  return async function (req, res, next) {
    try {
      await handler(req, res);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
}

module.exports = makeHandlerAwareOfAsyncErrors;

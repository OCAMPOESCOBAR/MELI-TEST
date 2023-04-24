const itemsRouter = require("./items");

/**
 * Method to configure the middleware used by the routes
 *
 * @param app - application instance
 *
 * @returns Middleware configured
 */

const routerApi = (app) => {
  app.use("/api/items", itemsRouter);
};

module.exports = routerApi;

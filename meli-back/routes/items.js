const express = require("express");
const ItemsService = require("../services/items");
const validateParams = require("../middleware/queryParams");
const itemsRouter = express.Router();
const service = new ItemsService();
const boom = require("@hapi/boom");

/**
 * Route to get product details
 *
 * @param req - request
 * @param res - response
 * @param next - next
 *
 * @returns result product detail
 */
itemsRouter.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    if (id) {
      const itemSelected = await service.details(id);
      res.status(200).json({
        author: {
          name: "Angelica",
          lastname: "Ocampo",
        },
        ...itemSelected,
      });
    } else {
      res.status(404).json({
        message: "id not found",
      });
    }
  } catch (e) {
    const status = e?.response?.status ?? 500;
    res.status(status).json({
      status: e?.response?.status ?? 500,
      message: e?.response?.data?.error ?? 'Error',
    });
  }
});

/**
 * Route to get products list
 *
 * @param req - request
 * @param res - response
 * @param next - next
 *
 * @returns result products list
 */
itemsRouter.get("/", validateParams, async (req, res, next) => {
  try {
    const { search } = req.query;
    let queryParam = search ?? ":query";
    if (queryParam) {
      const itemsList = await service.search(queryParam);
      res.status(200).json({
        author: {
          name: "Angelica",
          lastname: "Ocampo",
        },
        ...itemsList,
      });
    }
  } catch (e) {
    const status = e?.response?.status ?? 500;
    res.status(status).json({
      status: e?.response?.status ?? 500,
      message: e?.response?.data?.error ?? 'Error'
    });
  }
});

module.exports = itemsRouter;

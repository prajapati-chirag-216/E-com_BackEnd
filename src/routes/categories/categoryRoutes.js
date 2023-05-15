const express = require("express");
const auth = require("../../auth");
const multer = require("multer");
const path = require("path");
const {
  addCategoryHandler,
  fetchCategoriesHandler,
  deleteCategoryHandler,
  updateCategoryHandler,
} = require("./categoryHandler");
const categoryRouter = express.Router();

function allowUnauthenticated(req, res, next) {
  const { origin } = req.headers;
  if (origin === "http://localhost:5000") {
    return next();
  } else {
    auth(req, res, next);
  }
}

categoryRouter.get(
  "/fetchCategories",
  allowUnauthenticated,
  fetchCategoriesHandler
);
categoryRouter.post("/addCategory", auth, addCategoryHandler);
categoryRouter.delete("/deleteCategory/:id", auth, deleteCategoryHandler);
categoryRouter.patch("/updatecategory/:id", updateCategoryHandler);

module.exports = categoryRouter;

const express = require("express");
// const auth = require("../../auth");

const {
  httpGetProduct,
  httpGetAllProducts,
  httpGetProductDetails,
  httpAddProduct,
  httpdeleteProduct,
  httpUpdateProduct,
  httpPostReview,
  httpGetProductReviews
} = require("../../routes/product/product.controller");

const productRouter = express.Router();

productRouter.get("/getproduct/:id", httpGetProduct);
productRouter.get("/getproductDetails/:id", httpGetProductDetails);
productRouter.get("/getproduct", httpGetAllProducts);
productRouter.post("/addproduct", httpAddProduct);
productRouter.delete("/deleteproduct/:id", httpdeleteProduct);
productRouter.patch("/updateproduct/:id", httpUpdateProduct);
productRouter.post("/productreview/:id",httpPostReview)
productRouter.get("/getproductReviews/:id",httpGetProductReviews)

module.exports = productRouter;

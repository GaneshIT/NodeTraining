const authJwt  = require("../middlewares/authJwt");

module.exports = app => {
    const products = require("../controller/product.controller.js");
  //access REST API methods(GET,POST,PUT,DELETE)
    var router = require("express").Router();
  
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
      });

    // Create a new Products
    router.get("/",[authJwt.verifyToken], products.showAll);
    
    router.post("/create",products.create);

    router.put("/updateproduct/:id", products.update);

    router.delete("/deleteproduct/:id", products.delete);

    router.delete("/deleteproduct", products.deleteAll);

    app.use("/api/products/", router);
  };
  
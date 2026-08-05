const express = require('express');
const productRouter = express.Router();

// create product api logic
productRouter.post('/createProduct', validationMiddleware(productSchema), productController.createProduct);

productRouter.get("/getAllProducts", authMiddleware, async (req, res) => {
    try {
        const { page, limit, sort = "ASC" } = req.query;

        let allProducts = await ProductModel.find({})
            .skip((page - 1) * limit)
            .limit(limit)
            .select("-SKU")
            .sort(sort);

        res.json(allProducts);
    } catch (err) {
        console.log("error", err);
    }
});


// get product api logic


// update product api logic


// delete product api logic


const createProduct = async (req, res) => {
    try {
        const productExist = await ProductModel.findOne({ SKU: req.body.SKU });

        if (productExist) {
            return res.status(400).send("product already exist");
        }

        const { name, SKU, price, description, category } = req.body;
        const newProduct = {
            name,
            price,
            SKU,
            description,
            category,
        };

        await ProductModel.create(newProduct);
        res.status(201).send("product created successfully");
    } catch (err) {
        console.log("error", err);
    }
};

module.exports={
    createProduct
}
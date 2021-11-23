const ApiHelper = require("../helper/ApiHelper");
const Product = require("../model/productModel");

//Create Product --ADMIN
exports.createProduct = async (req, res) => {
  try {
    req.body.user = req.user.id;
    const product = await Product.create(req.body);
    res.status(200).json({
      success: true,
      product,
    });
  } catch (err) {
    return res.status(500).json({
      error: err.message,
    });
  }
};

//GET ALL PRODUCT
exports.getAllProduct = async (req, res) => {
  try {
    const numberOfProduct = await Product.count();
    const apiHelper = new ApiHelper(Product.find(), req.query).search();

    let products = await apiHelper.query;
    res.status(200).json({
      success: true,
      products,
      numberOfProduct,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: "Failed To Get All The Products",
    });
  }
};

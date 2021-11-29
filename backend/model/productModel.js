const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Enter Product Name"],
    },
    description: {
      type: String,
      required: [true, "Please Enter Prodcut decription"],
    },
    price: {
      type: Number,
      required: [true, "Please Enter Product Price"],
    },
    image: {
      type: String,
      required: [true, "Please upload product pic"],
    },
    category: {
      type: String,
      required: [true, "Select The Category"],
    },
    stock: {
      type: Number,
      required: [true, "Please Enter The Stock"],
      maxlength: [4, "Stock Can't be 9999+"],
      default: 1,
    },
    // user: {
    //   type: mongoose.Schema.ObjectId,
    //   ref: "User",
    //   required: true,
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);

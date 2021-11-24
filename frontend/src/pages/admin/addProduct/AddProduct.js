import React from "react";
import "./addProduct.css";
import darkLogo from "../../../assets/dark-logo.png";

const AddProduct = () => {
  return (
    <>
      <div className="add-product">
        <div className="add-product-container">
          <img src={darkLogo} className="logo" alt="" />
          <div class="form">
            <input type="text" id="product-name" placeholder="product name" />
            <input
              type="text"
              id="short-des"
              placeholder="short line about the product"
            />

            <div class="product-info">
              <div class="product-image">
                <p class="text">product image</p>
              </div>
              <div class="upload-image-sec">
                <p class="text">
                  <img src="img/camera.png" alt="" />
                  upload image
                </p>
                <div class="upload-catalouge">
                  <input
                    type="file"
                    class="fileupload"
                    id="first-file-upload-btn"
                    hidden
                  />
                  <label
                    for="first-file-upload-btn"
                    class="upload-image"
                  ></label>
                </div>
              </div>
            </div>
          </div>
          <div class="product-price">
            <input type="number" id="actual-price" placeholder="actual price" />
          </div>
          <div className="lower-input">
            <input
              type="number"
              id="stock"
              min="10"
              placeholder="item in sstocks (minimum 20)"
            />

            {/* <textarea
              id="tags"
              placeholder="Enter categories here, for example - Men, Jeans, Blue Jeans, Rough jeans (you sholud add men or women at start)"
            ></textarea> */}
            <select className="category-select">
              <option value="">Choose Category</option>
              <option>Electronics</option>
              <option>Cloths</option>
              <option>Sports</option>
              <option>Education</option>
            </select>
            <div class="buttons">
              <button class="save-btn" id="add-btn">
                add product
              </button>
              <button class="save-btn" id="save-btn">
                save draft
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;

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
            <textarea id="des" placeholder="detail description"></textarea>

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
                  <input
                    type="file"
                    class="fileupload"
                    id="second-file-upload-btn"
                    hidden
                  />
                  <label
                    for="second-file-upload-btn"
                    class="upload-image"
                  ></label>
                  <input
                    type="file"
                    class="fileupload"
                    id="third-file-upload-btn"
                    hidden
                  />
                  <label
                    for="third-file-upload-btn"
                    class="upload-image"
                  ></label>
                  <input
                    type="file"
                    class="fileupload"
                    id="fourth-file-upload-btn"
                    hidden
                  />
                  <label
                    for="fourth-file-upload-btn"
                    class="upload-image"
                  ></label>
                </div>
              </div>
              <div class="select-sizes">
                <p class="text">size available</p>
                <div class="sizes">
                  <input
                    type="checkbox"
                    class="size-checkbox"
                    id="xs"
                    value="xs"
                  />
                  <input
                    type="checkbox"
                    class="size-checkbox"
                    id="s"
                    value="s"
                  />
                  <input
                    type="checkbox"
                    class="size-checkbox"
                    id="m"
                    value="m"
                  />
                  <input
                    type="checkbox"
                    class="size-checkbox"
                    id="l"
                    value="l"
                  />
                  <input
                    type="checkbox"
                    class="size-checkbox"
                    id="xl"
                    value="xl"
                  />
                  <input
                    type="checkbox"
                    class="size-checkbox"
                    id="xxl"
                    value="xxl"
                  />
                  <input
                    type="checkbox"
                    class="size-checkbox"
                    id="xxxl"
                    value="xxxl"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="product-price">
            <input type="number" id="actual-price" placeholder="actual price" />
            <input
              type="number"
              id="discount"
              placeholder="discount percentage"
            />
            <input type="number" id="sell-price" placeholder="selling price" />
          </div>
          <div className="lower-input">
            <input
              type="number"
              id="stock"
              min="20"
              placeholder="item in sstocks (minimum 20)"
            />

            <textarea
              id="tags"
              placeholder="Enter categories here, for example - Men, Jeans, Blue Jeans, Rough jeans (you sholud add men or women at start)"
            ></textarea>

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

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./addProduct.css";
import darkLogo from "../../../assets/dark-logo.png";
import storage from "../../../firebase/fireConfig";
import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";
import { createProduct } from "../../../context/action/productAction";
import AdminNavbar from "../../../components/navbar/AdminNavbar";

const AddProduct = () => {
  const [product, setProduct] = useState(null);
  const [image, setImage] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);
  const [progress, setProgress] = useState(0);
  const [canUpload, setCanUpload] = useState(false);

  const dispatch = useDispatch();
  const { isProductCreated } = useSelector((state) => state.product);

  const categories = [
    "Laptop",
    "Footwear",
    "Bottom",
    "Tops",
    "Attire",
    "Camera",
    "SmartPhones",
  ];

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setProduct({ ...product, [e.target.name]: value });
  };

  // console.log(product);
  const upload = (image) => {
    const fileName = new Date().getTime() + image.name;
    const storageRef = ref(storage, `images/${fileName}`);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        setProgress(progress);
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        console.log("Firebase Upload error" + error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImagesPreview(downloadURL);
          setProduct((prev) => {
            return { ...prev, image: downloadURL };
          });
          setCanUpload(true);
        });
      }
    );
  };

  const createProductImagesChange = (e) => {
    e.preventDefault();
    if (!image) {
      console.log("Please select an image");
      return;
    } else {
      upload(image);
    }
  };

  const handleCreateProduct = (e) => {
    e.preventDefault();
    dispatch(createProduct(product));
  };
  return (
    <>
      <AdminNavbar />
      <div className="add-product">
        <div className="add-product-container">
          <img src={darkLogo} className="logo" alt="" />
          <div class="form">
            <input
              type="text"
              id="product-name"
              onChange={handleChange}
              name="name"
              placeholder="product name"
            />
            <input
              type="text"
              id="short-des"
              name="description"
              onChange={handleChange}
              placeholder="short line about the product"
            />

            <div class="product-info">
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
                    name="image"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                  <label
                    for="first-file-upload-btn"
                    class="upload-image"
                  ></label>
                </div>
                <div
                  className="image-upload-progress"
                  style={{ width: `${progress}%` }}
                ></div>
                <button
                  className="save-btn"
                  onClick={createProductImagesChange}
                >
                  Upload Product Image
                </button>
              </div>
            </div>
          </div>
          <div class="product-price">
            <input
              type="number"
              id="actual-price"
              name="price"
              onChange={handleChange}
              placeholder="actual price"
            />
          </div>
          <div className="lower-input">
            <input
              type="number"
              id="stock"
              min="10"
              name="stock"
              onChange={handleChange}
              placeholder="item in sstocks (minimum 20)"
            />

            <select
              className="category-select"
              onChange={handleChange}
              name="category"
            >
              <option value="">Choose Category</option>
              {categories.map((cate) => (
                <option key={cate} value={cate}>
                  {cate}
                </option>
              ))}
            </select>
            <div class="buttons">
              <button
                class={canUpload ? "save-btn" : "wait-to-save"}
                id="add-btn"
                // disabled={canUpload && true}
                onClick={handleCreateProduct}
              >
                add product
              </button>
              {isProductCreated && (
                <button class="save-btn" id="save-btn">
                  Product Is Created
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;

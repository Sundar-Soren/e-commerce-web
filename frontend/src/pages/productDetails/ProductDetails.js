import React from "react";
import "./productDetails.css";
import productImg1 from "../../assets/productImg1.png";
import productImg2 from "../../assets/productImg2.png";
import productImg3 from "../../assets/productImg3.png";
import productImg4 from "../../assets/productImg4.png";
import NavbarUpper from "../../components/navbar/NavbarUpper";

const ProductDetails = () => {
  return (
    <>
      <NavbarUpper />
      <section className="product-details">
        <div className="image-slider">
          <div className="product-images">
            <img src={productImg1} className="active" alt="" />
            <img src={productImg2} className="active" alt="" />
            <img src={productImg3} className="active" alt="" />
            <img src={productImg4} className="active" alt="" />
          </div>
        </div>

        <div className="details">
          <h2 className="product-brand">calvin klein</h2>
          <p className="product-short-des">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
          <span className="product-price">$99</span>
          <span className="product-actual-price">$200</span>
          <span className="product-discount">( 50% off )</span>

          <p className="product-sub-heading">select size</p>

          <input
            type="radio"
            name="size"
            value="s"
            checked
            hidden
            id="s-size"
          />
          <label for="s-size" className="size-radio-btn check">
            s
          </label>
          <input type="radio" name="size" value="m" hidden id="m-size" />
          <label for="m-size" className="size-radio-btn">
            m
          </label>
          <input type="radio" name="size" value="l" hidden id="l-size" />
          <label for="l-size" className="size-radio-btn">
            l
          </label>
          <input type="radio" name="size" value="xl" hidden id="xl-size" />
          <label for="xl-size" className="size-radio-btn">
            xl
          </label>
          <input type="radio" name="size" value="xxl" hidden id="xxl-size" />
          <label for="xxl-size" className="size-radio-btn">
            xxl
          </label>

          <button className="btn cart-btn">add to cart</button>
          <button className="btn">add to wishlist</button>
        </div>
      </section>
      <section className="detail-des">
        <h2 className="heading">description</h2>
        <p className="des">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit nisi
          inventore at, iusto facere enim quasi asperiores omnis sint, similique
          dolorem voluptatibus quidem vitae error perspiciatis labore deleniti,
          ipsa alias illum cum nesciunt iure fugiat. Similique accusamus fugiat
          laudantium tempora exercitationem culpa unde aliquam repellendus
          voluptatem hic mollitia id beatae nihil ipsum aliquid vel, iste,
          delectus cupiditate voluptate adipisci sequi! Iusto, odit eos.
          Architecto nisi atque unde est laboriosam eum laborum, assumenda
          magnam eaque dolor, sunt et error commodi nihil neque. Rerum
          exercitationem tempora odio cupiditate voluptatem repellat et aliquam,
          explicabo fugiat, iste hic similique mollitia voluptatibus, qui
          facilis quam.
        </p>
      </section>
    </>
  );
};

export default ProductDetails;

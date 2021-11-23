import React from "react";
import NavbarUpper from "../../components/navbar/NavbarUpper";
import Products from "../../components/products/Products";
import "./searchPage.css";
const SearchPage = () => {
  return (
    <div>
      <NavbarUpper />
      <section className="search-results">
        <h2 className="heading">
          search results for <span>product</span>
        </h2>
      </section>
      <div>
        <Products />
      </div>
    </div>
  );
};

export default SearchPage;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import { loadUser } from "./context/action/userAction";
// import Alert from "./components/alert/Alert";
import Page4O4 from "./pages/4O4Page.js/4O4Page";
import AddProduct from "./pages/admin/addProduct/AddProduct";
import Home from "./pages/home/Home";
import ProductDetails from "./pages/productDetails/ProductDetails";
import SearchPage from "./pages/searchPage/SearchPage";
import Login from "./pages/user/login/Login";
import Signup from "./pages/user/signup/Signup";

const App = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, []);

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/products" element={<ProductDetails />} />
      <Route exact path="/search" element={<SearchPage />} />
      <Route exact path="/page404" element={<Page4O4 />} />
      <Route
        exact
        path="/signup"
        element={!isAuthenticated ? <Signup /> : <Navigate replace to="/" />}
      />
      <Route
        exact
        path="/login"
        element={!isAuthenticated ? <Login /> : <Navigate replace to="/" />}
      />
      <Route exact path="/product/create" element={<AddProduct />} />

      {/* <Route exact path="/" element={<Alert />} /> */}
    </Routes>
  );
};

export default App;

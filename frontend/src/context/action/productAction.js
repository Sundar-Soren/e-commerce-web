import axios from "axios";
import {
  CREATE_PRODUCT_FAIL,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
} from "../constant/productConstant";

//user login
export const createProduct = (product) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_PRODUCT_REQUEST });
    const config = { Headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post("/product/create", product, config);
    dispatch({ type: CREATE_PRODUCT_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({ type: CREATE_PRODUCT_FAIL, payload: error.response.data.error });
  }
};

import {
  CREATE_PRODUCT_FAIL,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
} from "../constant/productConstant";

export const productReducer = (state = { product: [] }, action) => {
  switch (action.type) {
    case CREATE_PRODUCT_REQUEST:
      return {
        loading: true,
        product: null,
        isProductCreated: false,
      };
    case CREATE_PRODUCT_SUCCESS:
      return {
        loading: false,
        product: action.payload,
        isProductCreated: true,
      };
    case CREATE_PRODUCT_FAIL:
      return {
        loading: false,
        product: action.payload,
        isProductCreated: false,
      };

    default:
      return state;
  }
};

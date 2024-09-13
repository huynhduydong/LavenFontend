import axios from "axios";

const getListProduct = async (pageNo, pageSize = 24, sortBy, sortDir) => {
  try {
    const res = await axios.get("http://localhost:8080/api/v1/products", {
      params: {
        pageNo,
        pageSize,
        sortBy,
        sortDir,
      },
    });
    if (res && res.data) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
    
  }
};

const getProductById = async (productId) => {
  try {
    const res = await axios.get(
      `http://localhost:8080/api/v1/products/${productId}`
    );
    if (res && res.data) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export { getListProduct, getProductById,createProduct };


const createProduct = async (product) => {
  let data = product;
  try {
    const res = await axios.post(
      "http://localhost:8080/api/v1/products",
      data
    );
    if (res && res.data) {
      return res;
    }
  } catch (error) {
    return error.response;
  }
};
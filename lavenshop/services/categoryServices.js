import axios from "axios";

const getCategories = async () => {
  try {
    const res = await axios.get("http://localhost:8080/api/v1/categories");
    if (res && res.data) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};

const getCategoryById = async (id) => {
  try {
    const res = await axios.get(
      `http://localhost:8080/api/v1/categories/${id}`,
      
    );
    if (res && res.data) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};

const createCategory = async (category,token) => {
  let data = category;
  let config = {
    maxBodyLength: Infinity,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const res = await axios.post(
      "http://localhost:8080/api/v1/categories",
      data,config    );
    if (res && res.data) {
      return res;
    }
  } catch (error) {
    return error.response;
  }
};

const updateCategoryById = async (category, id,token) => {
  let data = category;
  let config = {
    maxBodyLength: Infinity,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const res = await axios.put(
      `http://localhost:8080/api/v1/categories/${id}`,
      data,config
    );
    if (res && res.data) {
      return res;
    }
  } catch (error) {
    return error.response;
  }
};

const deleteCategoryById = async ( id,token) => {
  let config = {
    maxBodyLength: Infinity,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const res = await axios.delete(
      `http://localhost:8080/api/v1/categories/${id}`,config
    );
    if (res && res.data) {
      return res;
    }
  } catch (error) {
    return error.response;
  }
};
const searchCategoryByName = async (name, pageNo, pageSize) => {
  try {
    const res = await axios.get(
      `http://localhost:8080/api/v1/categories/search?name=${name}`,
      {
        params: {
          pageNo,
          pageSize,
        },
      }
    );
    if (res && res.data) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};
export {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategoryById,
  deleteCategoryById,
  searchCategoryByName
};
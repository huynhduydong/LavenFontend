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

export { getCategories, getCategoryById };
import axios from "axios";

const getAddressByUserId = async (accessToken) => {
  let config = {
    maxBodyLength: Infinity,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  try {
    const response = await axios.get(
      `http://localhost:8080/api/v1/address`,
      config
    );

    if (response && response.data) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export { getAddressByUserId };
import axios from "axios";
import api from './api';

export const addToCart = async (
  productItemId,
  productId,
  quantity,
  accessToken
) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${accessToken}`);

  const raw = JSON.stringify({
    productItemId: productItemId,
    productId: productId,
    quantity: quantity,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  try {
    const response = await fetch(
      "http://localhost:8080/api/v1/carts",
      requestOptions
    );

    const successText = response.text();
    return successText;
  } catch (error) {
    const errorText = error.text();
    return errorText;
  }
};

export const getCart = async (accessToken) => {
  let config = {
    maxBodyLength: Infinity,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  try {
    const response = await axios.get(
      `http://localhost:8080/api/v1/carts`,
      config
    );

    if (response && response.data) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const updateCart = async (
  productId,
  productItemId,
  delta,
  accessToken
) => {
  let data = JSON.stringify({
    productItemId: productItemId,
    productId: productId,
    delta: delta,
  });

  let config = {
    method: "put",
    maxBodyLength: Infinity,
    url: "http://localhost:8080/api/v1/carts",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    data: data,
  };

  try {
    const response = axios.request(config);

    if (response) {
      return response;
    }
  } catch (error) {
    return error;
  }
};

export const deleteCart = async (productId, productItemId, accessToken) => {
  let data = JSON.stringify({
    productItemId: productItemId,
    productId: productId,
  });

  let config = {
    method: "delete",
    maxBodyLength: Infinity,
    url: "http://localhost:8080/api/v1/carts",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    data: data,
  };
  try {
    const response = await axios.request(config);

    if (response) {
      return response;
    }
  } catch (error) {
    return error;
  }
};

export const deleteAllCart = async (accessToken) => {
  let config = {
    method: "delete",
    maxBodyLength: Infinity,
    url: "http://localhost:8080/api/v1/carts/all",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  try {
    const response = axios.request(config);

    if (response) {
      return response;
    }
  } catch (error) {
    return error;
  }
};
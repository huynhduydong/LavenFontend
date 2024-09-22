"use server";

import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const register = async (username, name, email, phone, password) => {
  try {
    const res = await axios.post("http://localhost:8080/api/v1/auth/signup", {
      username: username,
      name: name,
      email: email,
      password: password,
      phone: phone,
    });

    if (res && res.data) {
      return res.data;
    }
  } catch (error) {
    return error.response.data;
  }
};

export const authorize = async (username, password) => {
  const data = {
    grant_type: "password",
    username: username,
    password: password,
    scope: "client-internal",
  };

  const config = {
    maxBodyLength: Infinity,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic Y2xpZW50OnNlY3JldA==",
    },
  };

  try {
    const res = await axios.post(
      "http://localhost:8080/api/oauth2/v1/token",
      data,
      config
    );

    console.log(res);
    if (res && res.data) {
      const cookieStore = cookies();
      const { access_token: accessToken, refresh_token: refreshToken } =
        res.data;

      cookieStore.set("accessToken", accessToken);
      cookieStore.set("refreshToken", refreshToken);
      console.log("accessToken: "+accessToken);
      const role = jwtDecode(accessToken).authorities[0];
      return role;
    } else {
      throw new Error("Failed to authorize user.");
    }
  } catch (error) {
    throw new Error("Failed to authorize user.");
  }
};

export const login = async (username, password) => {
  let flag = true;
  let role;
  try {
    role = await authorize(username, password);
  } catch (error) {
    flag = false;
  }
  if (role) {
    if (role == "ADMIN") {
      redirect("/admin/product");
    } else {
      redirect("/");
    }
  } else flag = false;
  return flag;
};

export const refreshToken = async (refresh_token) => {
  let data = {
    grant_type: "refresh_token",
    client_id: "client",
    client_secret: "secret",
    refresh_token: refresh_token, 
  };

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://localhost:8080/api/oauth2/v1/token",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: data,
  };

  try {
    const res = await axios.post(
      "http://localhost:8080/api/oauth2/v1/token",
      data,
      config
    );

    if (res && res.data) {
      const cookieStore = cookies();
      const { access_token: accessToken, refresh_token: refreshToken } =
        res.data;

      cookieStore.set("accessToken", accessToken);
      cookieStore.set("refreshToken", refreshToken);
    }
  } catch (error) {
    console.log(error);
  }
};

export const logout = () => {
  const cookieStore = cookies();
  cookieStore.delete("accessToken");
  cookieStore.delete("refreshToken");
  redirect("/login");
};

export const getSession = () => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  if (accessToken) {
    const user = jwtDecode(accessToken);
    return user;
  } else {
    return undefined;
  }
};

export const getAccessToken = async () => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  if (accessToken) {
    return accessToken;
  } else {
    return undefined;
  }
};

export const getRefreshToken = () => {
  const cookieStore = cookies();
  const refreshToken = cookieStore.get("refreshToken")?.value;
  if (refreshToken) {
    return refreshToken;
  } else {
    return undefined;
  }
};
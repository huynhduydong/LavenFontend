"use client";

import Link from "next/link";
import { nunito } from "./../../../components/ui/fonts";
import Image from "next/image";
import logo2 from "../../../public/ic_logo_2.svg";
import facebookLogo from "../../../public/ic_facebook_logo.svg";
import googleLogo from "../../../public/ic_goole_logo.svg";
import { useState } from "react";
import { register } from "@/services/authServices";

const page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegisterButtonClick = async () => {
    console.log("Click", name, email, username, password);
    const res = await register(username, name, email, password);
    console.log(res);
  };

  const handleNameInputChange = (event) => {
    setName(event.target.value);
  };

  const handleUsernameInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordInputChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <div className="bg-blue-100 flex flex-row items-center justify-evenly py-[100px]">
        {/* Logo */}
        <Image
          src={logo2}
          alt="Harbe Logo"
          priority={true}
          className="h-auto w-[600px]"
        ></Image>

        {/* Form */}
        <div className="bg-white p-[32px] rounded-lg w-[480px]">
          <div className="text-xl">Đăng ký</div>

          <input
            placeholder="Họ và tên"
            className="w-full text-[14px] focus:outline-none focus:border-blue-600 focus:border-2 py-[10px] px-[20px] rounded border-2 border-gray-300 mt-[32px]"
            onChange={handleNameInputChange}
          ></input>

          <input
            placeholder="Email"
            className="w-full text-[14px] focus:outline-none focus:border-blue-600 focus:border-2 py-[10px] px-[20px] rounded border-2 border-gray-300 mt-[20px]"
            onChange={handleEmailInputChange}
          ></input>

          <input
            placeholder="Tên đăng nhập"
            className="w-full text-[14px] focus:outline-none focus:border-blue-600 focus:border-2 py-[10px] px-[20px] rounded border-2 border-gray-300 mt-[20px]"
            onChange={handleUsernameInputChange}
          ></input>

          <input
            placeholder="Mật khẩu"
            type="password"
            className="w-full text-[14px] focus:outline-none focus:border-blue-600 focus:border-2 py-[10px] px-[20px] rounded border-2 border-gray-300 mt-[20px]"
            onChange={handlePasswordInputChange}
          ></input>

          <button
            className="w-full bg-blue-600 text-white mt-[32px] rounded py-[12px] hover:bg-blue-400"
            onClick={handleRegisterButtonClick}
          >
            ĐĂNG KÝ
          </button>

          <div className="flex flex-row justify-center items-center mt-[32px] text-[14px] text-gray-500">
            <div>Bạn đã có tài khoản?</div>
            <Link href={"/login"}>
              <div className="ml-[6px] text-blue-600 hover:decoration-solid hover:underline">
                Đăng nhập
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default page;
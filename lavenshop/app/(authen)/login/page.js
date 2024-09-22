"use client";

import Link from "next/link";
import Image from "next/image";
import logo2 from "../../../public/ic_logo_2.svg";

import { useState } from "react";
import { getSession, login, logout } from "@/services/authServices";
import { useRouter } from "next/navigation";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import iconEye from "@/public/ic_eye.svg";
import iconHidden from "@/public/ic_hidden.svg";

export default function LoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [visibleIcon, setVisibleIcon] = useState(iconEye);

  const handleLogin = async (event) => {
    event.preventDefault();
    const isLogin = await login(username, password);
    if (isLogin) toast.success("Đăng nhập thành công!");
    else toast.error("Sai tài khoản hoặc mật khẩu!");
  };

  return (
    <>
      <div className="bg-blue-100 flex flex-row items-center justify-evenly w-full">
        {/* Logo */}
        <Image
          src={logo2}
          alt="Laven Logo"
          priority={true}
          className="h-auto w-[600px]"
        />

        {/* Form */}
        <div className="bg-white p-[32px] rounded-lg w-[480px]">
          <div className="text-xl">Đăng nhập</div>

          <form onSubmit={handleLogin}>
            <input
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Email/Số điện thoại/Tên đăng nhập (*)"
              className="w-full text-sm focus:outline-none focus:border-primary py-[10px] px-[20px] rounded border-2 border-gray-300 mt-[24px]"
            />

            <div className="relative flex flex-row items-center mt-[20px]">
              <input
                id="pass"
                placeholder="Mật khẩu (*)"
                type={visibleIcon == iconEye ? "password" : "text"}
                className="w-full text-[14px] focus:outline-none focus:border-primary focus:border-2 py-[10px] px-[20px] rounded border-2 border-gray-300"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></input>
              <Image
                alt="Show/Hidden pass button"
                className="hover:cursor-pointer absolute right-[16px]"
                src={visibleIcon}
                width={20}
                onClick={() => {
                  if (visibleIcon == iconEye) setVisibleIcon(iconHidden);
                  else setVisibleIcon(iconEye);
                }}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white mt-[32px] rounded py-[12px] hover:bg-blue-400"
            >
              ĐĂNG NHẬP
            </button>
          </form>

          {/* <Link href={"/"} className="hover:text-gray-600">
            <div className="text-[14px] text-primary mt-[8px] hover:decoration-solid hover:underline">
              Quên mật khẩu
            </div>
          </Link> */}

          {/* <div className="mt-[32px] flex flex-row justify-center items-center">
            <div className="w-[64px] border-[1px] h-[0px] border-gray-300"></div>
            <div className="text-[14px] text-gray-500 mx-[32px]">HOẶC</div>
            <div className="w-[64px] border-[1px] h-[0px] border-gray-300"></div>
          </div>

          <div className="flex flex-row justify-center items-center mt-[32px]">
            <button className="w-2/5 border-[1px] border-gray-400 rounded flex flex-row justify-center items-center py-[10px] hover:border-primary hover:shadow-lg">
              <Image
                src={facebookLogo}
                width={20}
                height={20}
                alt="Login by Facebook"
              ></Image>
              <div className="text-[14px] ml-[8px]">Facebook</div>
            </button>

            <button className="w-2/5 border-[1px] border-gray-400 rounded flex flex-row justify-center items-center py-[10px] hover:border-primary hover:shadow-lg ml-[20px]">
              <Image
                src={googleLogo}
                width={20}
                height={20}
                alt="Login by Google"
              ></Image>
              <div className="text-[14px] ml-[8px]">Google</div>
            </button>
          </div> */}

          <div className="flex flex-row justify-center items-center mt-[32px] text-[14px] text-gray-500">
            <div>Bạn mới biết đến Harbe?</div>
            <Link href={"/register"}>
              <div className="ml-[6px] text-primary hover:decoration-solid hover:underline">
                Đăng ký
              </div>
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
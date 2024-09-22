"use client";

import SearchInput from "./custom/SearchInput";
import Link from "next/link";
import { nunito } from "./ui/fonts";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { LogOut } from "@/components/icons/logout";
import { Login } from "@/components/icons/login";
import { Profile } from "@/components/icons/profile";
import { getAccessToken, getSession, logout } from "@/services/authServices";
import { useRouter } from "next/navigation";
import { getUserByProfile } from "@/services/userServices";
import { useEffect, useState } from "react";
import smileLogo from "./../public/ic_smile.svg";
import Image from "next/image";
import { getCart } from "@/services/cartServices";

const Header = () => {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState();
  const [cartItems, setCartItems] = useState([]);
  const [accessToken, setAccessToken] = useState();

  const getUserInfo = async () => {
    const session = getSession();

    if (session) {
      setUserInfo(await getUserByProfile(accessToken));
    }
  };

  const fetchCartItems = async () => {
    setCartItems(await getCart(accessToken));
  };

  const [searchValue, setSearchValue] = useState("");

  const handleSearchProduct = async (event) => {
    event.preventDefault();
    router.push("/search?name=" + searchValue);
  };

  useEffect(() => {
    (async () => {
      setAccessToken(await getAccessToken());
    })();
    getUserInfo();
  }, []);

  useEffect(() => {
    fetchCartItems(accessToken);
  }, [accessToken]);

  useEffect(() => {
    fetchCartItems(accessToken);
  }, [cartItems]);

  return (
    <div className="sticky top-0 z-50 flex flex-row justify-between items-center px-32 py-2 bg-white w-full">
      {/* <div className="grid grid-cols-12 items-center"> */}
      {/* Logo */}
      <Link href="/" className={`${nunito.className} w-fit`}>
        <div className="flex-col items-center text-primary justify-center">
          <div className="flex">
            <div className="text-4xl font-extrabold">La</div>
            <div className="text-4xl font-bold text-yellow-500">ven</div>
          </div>
          <div className="font-bold text-center text-sm">Tốt & Nhanh</div>
        </div>
      </Link>

      {/* Search */}
      <div className="flex-grow pr-10 ml-10">
        <SearchInput
          placeholder={"Bạn tìm gì hôm nay"}
          value={searchValue}
          onValueChange={(e) => setSearchValue(e.target.value)}
          onSubmit={handleSearchProduct}
        />
      </div>

      {/* Buttons */}
      <div className="w-1/4 flex flex-row items-center text-sm justify-between">
        {/* Trang chủ */}
        <Link href="/" className="flex text-primary items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
            <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
          </svg>
          <div className="ml-[4pxs]">Trang chủ</div>
        </Link>

       {/* Tài khoản */}
        <DropdownMenu>
          <DropdownMenuTrigger className="space-x-2">
            <div className="flex flex-row justify-center items-center">
              <Image src={smileLogo}></Image>
              <div className="ml-[4px]">Tài khoản</div>
            </div>
          </DropdownMenuTrigger>
          {userInfo && (
            <DropdownMenuContent>
              <DropdownMenuItem
                className="space-x-2 cursor-pointer"
                onClick={() => router.push("/customer/account")}
              >
                <Profile className="size-5" />
                <span>Hồ sơ</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="space-x-2 cursor-pointer"
                onSelect={() => {
                  logout();
                }}
              >
                <LogOut className="size-5" />
                <span>Đăng xuất</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          )}

          {!userInfo && (
            <DropdownMenuContent>
              <DropdownMenuItem className="space-x-2" onSelect={() => logout()}>
                <Login className="size-5" />
                <span>Đăng nhập</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          )}
        </DropdownMenu>

        <div className="border-[1px] border-gray-500 h-[2em]"></div>

        {/* Cart */}
        <Link href="/cart" className="flex items-center text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
          <div className="mb-3 w-5 h-4 rounded-full text-white flex items-center justify-center text-xs bg-red-500">
            {cartItems?.length ?? 0}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
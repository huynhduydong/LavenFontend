"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getAccessToken } from "@/services/authServices";
import { usePathname } from "next/navigation";
import { logout } from "@/services/authServices";
import icAdmin from "@/public/ic_profile/ic_admin.svg";
import icExit from "@/public/ic_profile/ic_exit.svg";

const SideBar = ({ menu, others, user }) => {
  const pathname = usePathname();
  const [accessToken, setAccessToken] = useState();
  const [selectedTab, setSelectedTab] = useState("Thông tin tài khoản");

  useEffect(() => {
    (async () => {
      setAccessToken(await getAccessToken());
    })();
  }, []);

  useEffect(() => {
    const name = menu.find((item) => item.link === pathname)?.name;
    if (name) {
      setSelectedTab(name);
    } else {
      const name = others.find((item) => item.link === pathname)?.name;
      if (name) {
        setSelectedTab(name);
      }
    }
  }, []);

  return (
    <>
      {user && (
        <div className="flex flex-col w-full">
          <div className=" pl-4">
            <div className="text-sm text-stone-500 font-light">
              Tài khoản của
            </div>
            <div className="">{user.name}</div>
          </div>
          <div className="flex flex-col justify-center h-fit">
            {menu.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                onClick={() => {
                  setSelectedTab(item.name);
                }}
              >
                <div
                  className="flex row items-center mt-[12px] py-[8px] pl-4 rounded cursor-pointer transition-all duration-300 ease-in-out w-full"
                  style={{
                    backgroundColor:
                      selectedTab === item.name ? "#e5e7eb" : "transparent",
                  }}
                >
                  <Image
                    alt={`${item.name} icon`}
                    src={item.icon}
                    className="size-4 mr-2"
                  />

                  <div className="text-black text-sm">{item.name}</div>
                </div>
              </Link>
            ))}
            {user && user.name === "admin" && (
              <Link href="/admin/product">
                <div
                  className="flex row items-center mt-[12px] py-[8px] pl-4 rounded cursor-pointer transition-all duration-300 ease-in-out w-full"
                  style={{
                    backgroundColor:
                      selectedTab === "Setting" ? "#e5e7eb" : "transparent",
                  }}
                >
                  <Image
                    alt="Setting icon"
                    src={icAdmin}
                    className="size-4 mr-2"
                  />

                  <div className="text-black text-sm">Admin Dashboard</div>
                </div>
              </Link>
            )}
            <button
              onClick={() => {
                logout();
              }}
            >
              <div className="flex row items-center mt-[12px] py-[8px] pl-4 rounded cursor-pointer transition-all duration-300 ease-in-out w-full">
                <Image alt={`Exit icon`} src={icExit} className="size-4 mr-2" />
                <div className="text-black text-sm mr-[40px]">Đăng xuất</div>
              </div>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;
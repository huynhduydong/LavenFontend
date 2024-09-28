"use client";
import SideBar from "@/components/custom/SideBar";
import icUser from "@/public/ic_profile/ic_user.svg";
import icNoti from "@/public/ic_profile/ic_noti.svg";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { BreadCrumb } from "@/components/custom/BreadCrumb";
import { getAccessToken, getSession } from "@/services/authServices";
import { getUserByProfile } from "@/services/userServices";

export default function ProfileLayout({ children }) {
  const [userInfo, setUserInfo] = useState();

  const getUserInfo = async () => {
    const session = await getSession();
    const accessToken = await getAccessToken();

    if (session) {
      let data = await getUserByProfile(accessToken);
      setUserInfo(data);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  const menu = [
    {
      name: "Thông tin tài khoản",
      icon: icUser,
      link: "/customer/account",
    },
    { name: "Thông báo của tôi", icon: icNoti, link: "/customer/notification" },
  ];

  const others = [
    { name: "Setting", icon: icUser, link: "" },
    { name: "Exit", icon: icUser, link: "/admin/exit" },
  ];

  const pathname = usePathname();
  const [headerTitle, setHeaderTitle] = useState("");
  useEffect(() => {
    const name = menu.find((item) => item.link === pathname)?.name;
    if (name) {
      setHeaderTitle(name);
    } else {
      const name = others.find((item) => item.link === pathname)?.name;
      if (name) {
        setHeaderTitle(name);
      }
    }
  }, [pathname]);

  return (
    <>
      <div className="bg-gray-100">
        <div className="mx-32 mb-2">
          <BreadCrumb information={"Thông tin tài khoản"} />
        </div>

        <div className="min-h-screen grid grid-cols-12 mr-32 ml-28">
          <div className="col-span-2 mr-3">
            <SideBar menu={menu} others={others} user={userInfo} />
          </div>

          <div className="col-span-10 flex flex-col">
            <div className="flex-grow">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
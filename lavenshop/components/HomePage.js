"use client";
import { useState, useEffect } from "react";
import { Avatar, AvatarImage } from "./ui/avatar";
import BorderSide from "./custom/BorderSide";
import CarouselPromotion from "./custom/CarouselPromotion";
import smallPromo1 from "@/public/pictures/promotion/smallPromo1.jpeg";
import smallPromo2 from "@/public/pictures/promotion/smallPromo2.jpeg";
import Image from "next/image";
import ProductCard from "./custom/ProductCard";
import Link from "next/link";
import CategoryCard from "./custom/CategoryCard";
import { getListProduct } from "@/services/productServices";

const HomePage = () => {
  const [productList, setProductList] = useState([]);

  const getProductData = async () => {
    const data = await getListProduct();
    console.log(">>> check product_list:", data);
    setProductList(data.content);
  };

  useEffect(() => {
    getProductData();
  }, []);

  const arrCategory = [
    {
      url: "https://cdn2.fptshop.com.vn/unsafe/96x0/filters:quality(100)/Tren_20_trieu_cate_thumb_9464481b81.png",
      name: "Điện thoại",
    },
    {
      url: "https://cdn2.fptshop.com.vn/unsafe/180x0/filters:quality(100)/laptop_cate_thumb_f8bef6898b.png",
      name: "Laptop",
    },
    {
      url: "https://cdn2.fptshop.com.vn/unsafe/96x0/filters:quality(100)/may_tinh_bang_cate_thumb_00e3b3eefa.png",
      name: "Máy tính bảng",
    },
    {
      url: "https://cdn2.fptshop.com.vn/unsafe/96x0/filters:quality(100)/dien_gia_dung_cate_thumb_b41130e09c.png",
      name: "Hàng gia dụng",
    },
    {
      url: "https://cdn2.fptshop.com.vn/unsafe/96x0/filters:quality(100)/may_lanh_tu_lanh_cate_thumb_8251a4da68.png",
      name: "Máy lạnh - điều hòa",
    },
    {
      url: "https://cdn2.fptshop.com.vn/unsafe/180x0/filters:quality(100)/laptop_cate_thumb_f8bef6898b.png",
      name: "Laptop",
    },
    {
      url: "https://cdn2.fptshop.com.vn/unsafe/180x0/filters:quality(100)/laptop_cate_thumb_f8bef6898b.png",
      name: "Laptop",
    },
    {
      url: "https://cdn2.fptshop.com.vn/unsafe/180x0/filters:quality(100)/laptop_cate_thumb_f8bef6898b.png",
      name: "Laptop",
    },
    {
      url: "https://cdn2.fptshop.com.vn/unsafe/180x0/filters:quality(100)/laptop_cate_thumb_f8bef6898b.png",
      name: "Laptop",
    },
    {
      url: "https://cdn2.fptshop.com.vn/unsafe/180x0/filters:quality(100)/laptop_cate_thumb_f8bef6898b.png",
      name: "Laptop",
    },
    {
      url: "https://cdn2.fptshop.com.vn/unsafe/180x0/filters:quality(100)/laptop_cate_thumb_f8bef6898b.png",
      name: "Laptop",
    },
    {
      url: "https://cdn2.fptshop.com.vn/unsafe/180x0/filters:quality(100)/laptop_cate_thumb_f8bef6898b.png",
      name: "Laptop",
    },
  ];
  return (
    <div className="bg-gray-100">
      {/* Badges */}
      <div className="flex justify-center gap-11 py-5 bg-gray-100">
        <div className="flex items-center gap-2">
          <Avatar className="bg-primary flex justify-center items-center text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </Avatar>
          <div className="">
            <div className="text-sm font-bold">Chất lượng</div>
            <div className="text-xs text-gray-500">Cam kết chính hãng</div>
          </div>
        </div>
        <BorderSide />
        <div className="flex items-center gap-2">
          <Avatar className="bg-[#e600a0] flex justify-center items-center text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
              />
            </svg>
          </Avatar>
          <div className="">
            <div className="text-sm font-bold">Tiện lợi</div>
            <div className="text-xs text-gray-500">
              Thanh toán & giao hàng nhanh
            </div>
          </div>
        </div>
        <BorderSide />
        <div className="flex items-center gap-2">
          <Avatar className="bg-[#8dc94c] flex justify-center items-center text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9 14.25 6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185ZM9.75 9h.008v.008H9.75V9Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 4.5h.008v.008h-.008V13.5Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </Avatar>
          <div className="">
            <div className="text-sm font-bold">Tích lũy</div>
            <div className="text-xs text-gray-500">Tích điểm mỗi đơn hàng</div>
          </div>
        </div>
        <BorderSide />
        <div className="flex items-center gap-2">
          <Avatar className="bg-primary flex justify-center items-center text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          </Avatar>
          <div className="">
            <div className="text-sm font-bold">Đổi trả</div>
            <div className="text-xs text-gray-500">Trong vòng 14 ngày</div>
          </div>
        </div>
        <BorderSide />
        <div className="flex items-center gap-2">
          <Avatar className="bg-[#ffbc59] flex justify-center items-center text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
              />
            </svg>
          </Avatar>
          <div className="">
            <div className="text-sm font-bold">Cửa hàng</div>
            <div className="text-xs text-gray-500">Giờ mở cửa</div>
          </div>
        </div>
      </div>

      {/* Promotion */}
      <div className="w-full flex justify-center bg-white">
        <div className="flex gap-1 w-fit ">
          <div className="w-[880px]">
            <CarouselPromotion />
          </div>
          <div className="space-y-1">
            <Image src={smallPromo1} width={435} alt="promotion-default" />
            <Image src={smallPromo2} width={435} alt="promotion-default" />
          </div>
        </div>
      </div>

      {/* Category */}
      <div className="bg-white flex flex-wrap my-7 mx-24 items-center justify-center py-2">
        {arrCategory.map((item, index) => (
          <Link href="/category" key={index}>
            <CategoryCard categoryItem={item} />
          </Link>
        ))}
      </div>

      {/* Products */}
      <div className="flex flex-wrap mx-24 justify-center gap-3 mt-5">
        {productList.map((item, index) => (
          <Link href={`/product/${item.productSlug}/${item.id}`} key={index}>
            <ProductCard id={item.id} product={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

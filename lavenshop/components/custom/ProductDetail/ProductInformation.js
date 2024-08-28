import React from "react";
import { convertPrice } from "@/utils/convertPrice";

export const ProductInformation = ({ product }) => {
  return (
    <>
      {product && (
        <div className="w-100 pt-5 pl-5 pr-9">
          {/* Product Name */}
          <div className="text-xl font-medium leading-6 flex">
            <span>{product.name}</span>
          </div>
          {/* Product Rating */}
          <div className="mt-3">
            <div className="cursor-pointer flex items-center gap-1">
              <span className="text-red-500 underline">
                {product.ratingAverage}
              </span>
              <div className="flex gap-1 items-center">
                {Array.from({ length: 5 }, (_, index) => (
                  <span key={index}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="red"
                      className="w-4 h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                ))}
              </div>
            </div>
          </div>
          {/* Product Price */}
          <div className="mt-3 flex flex-col">
            <div className="flex flex-col py-4 px-5 bg-price">
              <section className="flex items-center gap-4">
                {product && product.discountRate > 0 && (
                  <div className="line-through text-gray-400 text-sm">
                    ₫
                    {convertPrice(
                      (product.price * (100 - product.discountRate)) / 100
                    )}
                  </div>
                )}
                <div className="text-2xl text-red-500">
                  ₫{convertPrice(product.price)}
                </div>
                {product.discountRate > 0 && (
                  <>
                    {" "}
                    <div className="uppercase text-sm text-white bg-red-500 p-1 rounded-sm">
                      {product.discountRate}% Giảm
                    </div>
                  </>
                )}
              </section>
            </div>
          </div>
          {/* Product Option */}
          <div className="mt-6 px-5 pb-4 flex items-center">
            <div className="flex flex-col">
              <div className="flex items-center">
                <div className="w-28 mt-2 text-gray-500">Màu: </div>
                {product &&
                  product.options &&
                  product.options.map((productOptions) => (
                    <div
                      key={productOptions.id}
                      className="flex items-center gap-4 text-sm"
                    >
                      <div className="flex items-center">
                        {productOptions.value &&
                          productOptions.value.split(",").map((item) => (
                            <button
                              key={item}
                              style={{
                                border: "1px solid rgba(0, 0, 0, .09)",
                              }}
                              className="inline-flex mt-2 mr-2 p-2 px-4 rounded-sm items-center justify-center min-h-10 min-w-20"
                            >
                              {item}
                            </button>
                          ))}
                      </div>
                    </div>
                  ))}
              </div>

              <section className="flex items-center gap-4 text-sm mt-6 h-8">
                <div className="w-28 mt-2 text-gray-500">Số lượng </div>
                <div className="flex items-center">
                  <button
                    style={{ border: "1px solid rgba(0, 0, 0, .09)" }}
                    className="inline-flex mt-2 p-2 rounded-sm items-center justify-center w-8"
                  >
                    -
                  </button>
                  <input
                    type="text"
                    value={1}
                    style={{ border: "1px solid rgba(0, 0, 0, .09)" }}
                    className="inline-flex mt-2 p-2 w-12 text-center"
                  />
                  <button
                    style={{ border: "1px solid rgba(0, 0, 0, .09)" }}
                    className="inline-flex mt-2 p-2 rounded-sm items-center justify-center w-8"
                  >
                    +
                  </button>
                  <label className="text-gray-500 items-center inline-flex ms-4 mt-2">
                    9999 sản phẩm có sẵn
                  </label>
                </div>
              </section>
            </div>
          </div>
          {/* Add To Cart */}
          <div className="mt-4 flex w-100 pt-5 pl-5 pr-9 text-sm">
            <button className="inline-flex items-center bg-orange-100 border border-red-500 text-red-500 px-5 py-3 mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
              Thêm Vào Giỏ Hàng
            </button>
            <button className="inline-flex items-center bg-red-500 text-white px-5 py-3">
              Mua Ngay
            </button>
          </div>
        </div>
      )}
    </>
  );
};
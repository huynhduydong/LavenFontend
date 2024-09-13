"use client";

import React from "react";
import SearchInput from "@/components/custom/SearchInput";
import { getListProduct } from "@/services/productServices";
import Image from "next/image";
import { useState, useEffect } from "react";
import icPlus from "@/public/ic_admin/ic_plus.svg";
import icEditBlue from "@/public/ic_admin/ic_edit_blue.svg";
import icBin from "@/public/ic_admin/ic_bin.svg";
import { PaginationSelection } from "@/components/HomePage";
import ProductRow from "@/components/custom/Admin/ProductRow";
import CustomTable from "@/components/custom/Admin/CustomTable";
import { CustomCreateDialog } from "@/components/custom/Admin/CustomCreateDialog";
import ImagePicker from "@/components/custom/Admin/ImagePicker";
import iconPlusBlue from "@/public/ic_admin/ic_plus_blue.svg";
import iconRemove from "@/public/ic_admin/ic_remove.svg";

const ProductAdminPage = () => {
  const [productList, setProductList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [totalItems, setTotalItems] = useState();
  const productField = [
    "Ảnh",
    "Tên",
    "Hãng",
    "Giá",
    "Giảm giá",
    "Đánh giá",
    "Lượt đánh giá",
    "Số lượng",
  ];
  const [totalProductQuantity, setTotalProductQuantity] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [productSpecList, setProductSpecList] = useState([]);
  const [productOptionList, setProductOptionList] = useState([]);

  const getProductData = async () => {
    const data = await getListProduct(currentPage, itemsPerPage);
    setProductList(data.content);
    setTotalItems(data.totalElements);
  };

  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileAccepted = (files) => {
    setSelectedFiles(files);
  };

  const getAllProductQuantity = async () => {
    const data = await getListProduct();
    console.log(data);
    setTotalProductQuantity(data.content.length);
  };

  // useEffect(() => {
  //   getAllProductQuantity();
  // }, []);

  useEffect(() => {
    getProductData();
  }, [currentPage]);

  return (
    <div className="flex flex-col justify-between items-center h-full">
      {/* Search bar */}
      <div className="flex flex-row items-center w-full border-b-[1px] border-gray-300 px-[32px] py-[10px]">
        <div className="flex flex-row items-center mr-[64px]">
          <div className="text-[18px] font-semibold">All products</div>
          <div className="px-[8px] py-[1px] bg-blue-600 text-white text-[14px] rounded-[16px] ml-[12px] flex items-center justify-center">
            {totalProductQuantity}
          </div>
        </div>

        <div className="grow">
          <SearchInput placeholder={"Nhập từ khóa..."} />
        </div>

        <div className="flex flex-row justify-center items-center gap-[16px] ml-[64px]">
          <button
            className="border-warning border-[1px] px-[20px] py-[6px] rounded-[8px] hover:drop-shadow-xl hover:opacity-80 flex flex-row items-center justify-center bg-red-50 w-[110px]"
            style={{ opacity: selectedProduct != -1 ? 1 : 0 }}
          >
            <Image alt="Bin icon" src={icBin} width={12} height={12} />
            <div className="text-warning text-[14px] font-bold ml-[4px]">
              Xóa
            </div>
          </button>

          <button
            className="border-blue-600 border-[1px] px-[20px] py-[6px] rounded-[8px] hover:drop-shadow-xl hover:opacity-80 flex flex-row items-center justify-center bg-blue-50 w-[110px]"
            style={{ opacity: selectedProduct != -1 ? 1 : 0 }}
          >
            <Image alt="Edit icon" src={icEditBlue} width={12} height={12} />
            <div className="text-blue-600 text-[14px] font-bold ml-[4px]">
              Sửa
            </div>
          </button>

          <CustomCreateDialog
            itemTrigger={
              <button className="bg-blue-600 px-[20px] py-[6px] rounded-[8px] hover:drop-shadow-xl hover:opacity-80 flex flex-row items-center justify-center w-[110px]">
                <Image alt="Plus icon" src={icPlus} width={12} height={12} />
                <div className="text-white text-[14px] font-bold  ml-[4px]">
                  Thêm
                </div>
              </button>
            }
            title={"Thêm sản phẩm"}
            itemContent={
              <div className="flex flex-col items-start justify-start w-full h-[500px] overflow-y-scroll py-[8px]">
                {/* Image picker and price */}
                <div className="flex flex-row w-full">
                  {/* Image picker */}
                  <div className="p-[16px] bg-white rounded-[8px] border-[1.5px] border-gray-300">
                    <div className="text-base text-black font-semibold">
                      Ảnh sản phẩm
                    </div>
                    <div className="flex flex-row items-center justify-center p-[16px] bg-white rounded-[8px] border-[1.5px] border-gray-300 mt-[24px]">
                      <ImagePicker onFileAccepted={handleFileAccepted} />

                      <div className="w-[240px] h-[240px] flex items-center justify-center">
                        {selectedFiles.length > 0 && (
                          <div>
                            <ul>
                              {selectedFiles.map((file, index) => (
                                <li
                                  key={index}
                                  className="ml-[16px] rounded-[8px]"
                                >
                                  <Image
                                    src={URL.createObjectURL(new Blob([file]))}
                                    alt={file.name}
                                    width={240}
                                    height={240}
                                  />
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="p-[16px] bg-white rounded-[8px] border-[1.5px] border-gray-300 flex flex-grow flex-col mx-[16px]">
                    <div className="text-base text-black font-semibold">
                      Giá và số lượng
                    </div>
                    <div className="flex flex-col items-start justify-start bg-white mt-[12px] flex-grow">
                      <div className="w-full mt-[12px]">
                        <div className="text-sm font-semibold text-black flex flex-col justify-start items-start">
                          Giá cơ bản
                        </div>
                        <div className="w-full relative flex items-center justify-center flex-row">
                          <input
                            type="number"
                            className="border-[1.5px] border-gray-300 bg-gray-50 focus:outline-none focus:border-blue-600 focus:border-[1.5px] text-black text-sm py-[8px] px-[16px] rounded-[6px] w-full mt-[4px] pr-[32px]"
                          />
                          <div className="text-sm text-black absolute right-[16px] mt-[4px]">
                            đ
                          </div>
                        </div>
                      </div>

                      <div className="w-full mt-[12px]">
                        <div className="text-sm font-semibold text-black flex flex-col justify-start items-start">
                          Giảm giá
                        </div>
                        <div className="w-full relative flex items-center justify-center flex-row">
                          <input
                            type="number"
                            className="border-[1.5px] border-gray-300 bg-gray-50 focus:outline-none focus:border-blue-600 focus:border-[1.5px] text-black text-sm py-[8px] px-[16px] rounded-[6px] w-full mt-[4px] pr-[32px]"
                          />
                          <div className="text-sm text-black absolute right-[16px] mt-[4px]">
                            %
                          </div>
                        </div>
                      </div>

                      <div className="w-full mt-[12px]">
                        <div className="text-sm font-semibold text-black flex flex-col justify-start items-start">
                          Số lượng
                        </div>
                        <div className="w-full relative flex items-center justify-center flex-row">
                          <input
                            type="number"
                            className="border-[1.5px] border-gray-300 bg-gray-50 focus:outline-none focus:border-blue-600 focus:border-[1.5px] text-black text-sm py-[8px] pl-[16px] pr-[8px] rounded-[6px] w-full mt-[4px]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product general information */}
                <div className="flex flex-row w-full">
                  <div className="w-full p-[16px] bg-white rounded-[8px] border-[1.5px] border-gray-300 flex flex-grow flex-col mr-[16px] mt-[16px]">
                    <div className="text-base text-black font-semibold">
                      Thông tin chung
                    </div>
                    <div className="flex flex-col items-start justify-start bg-white mt-[12px] flex-grow">
                      <div className="w-full mt-[12px]">
                        <div className="text-sm font-semibold text-black flex flex-col justify-start items-start">
                          Tên sản phẩm
                        </div>
                        <div className="w-full relative flex items-center justify-center flex-row">
                          <input
                            type="text"
                            className="border-[1.5px] border-gray-300 bg-gray-50 focus:outline-none focus:border-blue-600 focus:border-[1.5px] text-black text-sm py-[8px] px-[16px] rounded-[6px] w-full mt-[4px] pr-[32px]"
                          />
                        </div>
                      </div>

                      <div className="w-full mt-[12px]">
                        <div className="text-sm font-semibold text-black flex flex-col justify-start items-start">
                          Mô tả
                        </div>
                        <div className="w-full relative flex items-center justify-center flex-row">
                          <textarea
                            className="border-[1.5px] border-gray-300 bg-gray-50 focus:outline-none focus:border-blue-600 focus:border-[1.5px] text-black text-sm py-[8px] px-[16px] rounded-[6px] w-full mt-[4px] pr-[32px]"
                            rows="5"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product detail information */}
                <div className="flex flex-row w-full">
                  {/* Product specification */}
                  <div className="w-3/5 p-[16px] bg-white rounded-[8px] border-[1.5px] border-gray-300 flex flex-grow flex-col mr-[16px] mt-[16px] h-fit">
                    <div className="text-base text-black font-semibold w-full">
                      Thông tin chi tiết
                    </div>
                    <div className="flex flex-col items-start justify-start bg-white mt-[12px] flex-grow w-full">
                      {productSpecList.map((item, index) => (
                        <NameValueForm
                          key={index}
                          onRemove={() => {
                            setProductSpecList(
                              productSpecList.filter((_, i) => i != index)
                            );
                          }}
                        />
                      ))}
                      <button
                        className="w-full bg-blue-100 flex justify-center items-center py-[12px] rounded-[8px] border-[2px] border-blue-400 border-dashed mt-[12px]"
                        onClick={() => {
                          setProductSpecList([
                            ...productSpecList,
                            { name: "", value: "" },
                          ]);
                        }}
                      >
                        <Image
                          alt="Add product specification"
                          src={iconPlusBlue}
                          height={18}
                          width={18}
                        />
                      </button>
                    </div>
                  </div>

                  {/* Product options */}
                  <div className="p-[16px] bg-white rounded-[8px] border-[1.5px] border-gray-300 flex w-2/5 flex-col mr-[16px] mt-[16px] h-fit">
                    <div className="text-base text-black font-semibold w-full">
                      Thông tin phân loại hàng
                    </div>
                    <div className="flex flex-col items-start justify-start bg-white mt-[12px] flex-grow w-full">
                      {productOptionList.map((item, index) => (
                        <NameValueForm
                          key={index}
                          onRemove={() => {
                            setProductOptionList(
                              productOptionList.filter((_, i) => i != index)
                            );
                          }}
                        />
                      ))}
                      <button
                        className="w-full bg-blue-100 flex justify-center items-center py-[12px] rounded-[8px] border-[2px] border-blue-400 border-dashed mt-[12px]"
                        onClick={() => {
                          setProductOptionList([
                            ...productOptionList,
                            { name: "", value: "" },
                          ]);
                        }}
                      >
                        <Image
                          alt="Add product option"
                          src={iconPlusBlue}
                          height={18}
                          width={18}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            }
          />
        </div>
      </div>

      {/* Product table data */}
      <div className="py-[10px] flex flex-col justify-between items-center grow px-[32px] py-[20px] w-full">
        <CustomTable
          data={productList}
          renderRow={(item, index) => (
            <ProductRow
              key={index}
              product={item}
              onSelected={() => {
                selectedProduct == index
                  ? setSelectedProduct(-1)
                  : setSelectedProduct(index);
              }}
              className={selectedProduct == index ? "bg-blue-400" : ""}
              onClickViewDetail={() => {
                console.log("View detail");
              }}
            />
          )}
          field={productField}
        />

        {/* Pagination */}
        <div>
          <PaginationSelection
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export const NameValueForm = ({ name, value, onChange, onRemove }) => {
  return (
    <>
      <div className="w-full mt-[12px] flex flex-row items-center">
        <div className="relative flex items-start justify-center flex-col w-2/5">
          <div className="text-sm font-semibold text-black flex flex-col justify-start items-start w-full">
            Tên
          </div>
          <input
            type="text"
            className="border-[1.5px] border-gray-300 bg-gray-50 focus:outline-none focus:border-blue-600 focus:border-[1.5px] text-black text-sm py-[8px] px-[16px] rounded-[6px] w-full mt-[4px] pr-[32px]"
          />
        </div>

        <div className="relative flex items-start justify-center flex-col ml-[16px] flex-grow">
          <div className="text-sm font-semibold text-black flex flex-col justify-start items-start w-full">
            Giá trị
          </div>
          <input
            type="text"
            className="border-[1.5px] border-gray-300 bg-gray-50 focus:outline-none focus:border-blue-600 focus:border-[1.5px] text-black text-sm py-[8px] px-[16px] rounded-[6px] w-full mt-[4px] pr-[32px]"
          />
        </div>

        <Image
          alt="Remove icon"
          src={iconRemove}
          height={20}
          width={20}
          className="mt-[22px] ml-[8px] cursor-pointer hover:opacity-80"
          onClick={onRemove}
        />
      </div>
    </>
  );
};

export default ProductAdminPage;
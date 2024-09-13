"use client";

import SearchInput from "@/components/custom/SearchInput";
import { getListProduct } from "@/services/productServices";
import Image from "next/image";
import { useState, useEffect } from "react";
import icPlus from "@/public/ic_admin/ic_plus.svg";
import icEditBlue from "@/public/ic_admin/ic_edit_blue.svg";
import icBin from "@/public/ic_admin/ic_bin.svg";
import ProductRow from "@/components/custom/Admin/ProductRow";
import CustomTable from "@/components/custom/Admin/CustomTable";
import { PaginationSelection } from "@/components/HomePage";

const ProductAdminPage = () => {
  const [productList, setProductList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
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

  const getProductData = async () => {
    const data = await getListProduct(currentPage, itemsPerPage);
    setProductList(data.content);
    setTotalItems(data.totalElements);
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

          <button className="bg-blue-600 px-[20px] py-[6px] rounded-[8px] hover:drop-shadow-xl hover:opacity-80 flex flex-row items-center justify-center w-[110px]">
            <Image alt="Plus icon" src={icPlus} width={12} height={12} />
            <div className="text-white text-[14px] font-bold  ml-[4px]">
              Thêm
            </div>
          </button>
        </div>
      </div>

      {/* Table */}
      {/* {productList.map((item, index) => (
        <div key={index}>
          <ProductRow product={item} />
        </div>
      ))} */}

      <div className="py-[10px] flex flex-col justify-between items-center grow px-[32px] py-[20px] w-full">
      <CustomTable
          data={productList}
          renderRow={(item, index) => (
            <ProductRow
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

export default ProductAdminPage;
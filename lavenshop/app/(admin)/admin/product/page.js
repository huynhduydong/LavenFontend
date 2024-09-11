"use client";
import Breadcrumb from "@/components/admin/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/admin/Layout/DefaultLayout";
import TableTwo from "@/components/admin/Table/TableTwo";
import { getListProduct } from "@/services/productServices";
import { useState, useEffect } from "react";

const ProductAdmin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [productList, setProductList] = useState([]);

  const getProductData = async () => {
    setIsLoading(true);
    try {
      const data = await getListProduct();
      console.log(">>> check product_list:", data);
      if (data.content) {
        setProductList(data.content);
      }
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      console.log(">>> check error:", e);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Product" />
      <TableTwo productData={productList} />
    </DefaultLayout>
  );
};

export default ProductAdmin;
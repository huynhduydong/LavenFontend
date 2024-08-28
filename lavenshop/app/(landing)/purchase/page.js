"use client";

import { MapPin } from "@/components/icons/map-pin";
import { Ticket } from "@/components/icons/ticket";
import { convertPrice } from "@/utils/convertPrice";

const PRODUCT = {
  img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/r/group_61_1_.png",
  name: "Chuột không dây Logitech M330 Silent Plus - Giảm ồn, USB, thuận tay phải, PC/ Laptop",
  color: "Đen",
  price: 339000,
  quantity: 1,
  total: 339000,
};

const PRODUCT_ARRAY = [PRODUCT, PRODUCT, PRODUCT, PRODUCT, PRODUCT];

// console.log("PRODUCT: ", PRODUCT);
// console.log("PRODUCT ARRAY: ", PRODUCT_ARRAY);

export default function PurchasePage() {
  const onLocationClick = () => {};
  const onVoucherClick = () => {};

  return (
    <div className="bg-detail px-32 h-full">
      <div className="space-y-4 py-4">
        <div className="bg-white p-8 space-y-4 rounded items-center">
          <div className="flex gap-x-2 text-primary items-center">
            <MapPin className="size-5" />
            <span>Địa chỉ nhận hàng</span>
          </div>
          <div className="flex gap-4 items-center">
            <span className="block w-1/6">Huỳnh Duy Đông (+84) 326470586</span>

            <div className="flex flex-grow gap-2">
              <span className="flex-grow">
                Trường Đại học Mở, TP. Hồ Chí Minh
              </span>
              <div className="flex items-center justify-center w-[130px]">
                <span
                  className="bg-white text-primary border-primary border text-xs font-medium me-2 px-2.5 py-0.5"
                  onClick={() => onLocationClick()}
                >
                  Mặc định
                </span>
              </div>
            </div>

            <div className="flex w-1/6 items-center justify-center">
              <button className="text-primary hover:underline">Thay đổi</button>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-white rounded items-center divide-y divide-dashed">
          <div className="w-full p-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-center text-gray-500">
                  <th className="px-6 py-3 text-left">Sản phẩm</th>
                  <th className="px-6 py-3">Phân loại hàng</th>
                  <th className="px-6 py-3">Đơn giá</th>
                  <th className="px-6 py-3">Số lượng</th>
                  <th className="px-6 py-3">Thành tiền</th>
                </tr>
              </thead>
              <tbody>
                {PRODUCT_ARRAY &&
                  PRODUCT_ARRAY.length > 0 &&
                  PRODUCT_ARRAY.map((product, index) => {
                    return (
                      <tr key={`product-${index}`}>
                        <td className="flex items-center gap-2 px-6 py-4">
                          <img className="size-10" src={product.img} />
                          <span className="line-clamp-1">{product.name}</span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          {product.color}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {convertPrice(product.price)}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {product.quantity}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {convertPrice(product.total)}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>

          <div className="flex gap-4 w-full items-center p-8">
            <div>Lời nhắn:</div>
            <input
              type="text"
              id="message"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[300px] p-2.5"
              placeholder="Lưu ý cho người bán..."
            />
          </div>
        </div>

        <div className="flex flex-col bg-white rounded items-center divide-y divide-dashed">
          <div className="flex w-full justify-between p-8">
            <div className="flex gap-2 items-center">
              <Ticket className="size-5" />
              <span>Mã giảm giá</span>
            </div>
            <button
              className="text-primary hover:underline"
              onClick={() => onVoucherClick()}
            >
              Chọn hoặc nhập mã giảm giá
            </button>
          </div>

          <div className="flex w-full justify-between p-8">
            <span>Phương thức thanh toán:</span>
            <span>Thanh toán khi nhận hàng</span>
          </div>

          <div className="flex justify-end w-full bg-blue-50 p-8">
            <div className="space-y-4 w-[400px]">
              <div className="flex justify-between items-center">
                <span className="text-gray-500 text-sm">Tổng tiền hàng:</span>
                <span className="text-sm">{convertPrice(2000000)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 text-sm">
                  Tổng thanh toán ({PRODUCT_ARRAY.length} sản phẩm):
                </span>
                <span className="text-xl text-primary font-semibold">
                  {convertPrice(2000000)}
                </span>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="w-[150px] text-white bg-primary hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
                >
                  Mua hàng
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
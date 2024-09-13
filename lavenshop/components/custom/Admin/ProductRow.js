import trimText from "@/utils/trimText";
import Image from "next/image";
import iconEye from "@/public/ic_eye.svg";

const ProductRow = ({ product }) => {
  const formatMoney = (amount) => {
    // Ensure the input is treated as a string
    let amountStr = amount.toString();
    // Remove any commas
    amountStr = amountStr.replace(/,/g, "");
    // Convert to integer
    let number = parseInt(amountStr, 10);

    // Ensure the number is a valid integer
    if (isNaN(number)) {
      throw new Error("Invalid input: not a number");
    }

    // Format the number with commas as thousand separators
    let formattedAmount = number.toLocaleString("en-US");

    return formattedAmount;
  };

  return (
    <>
      <td>
        <div className="py-[3px] w-[100px]">
          <img
            src={product.thumbnailUrl}
            className="rounded-sm self-center h-[48px] w-[48px]"
            alt="product-prototype"
          />
        </div>
      </td>
      <td>
        <div className="pr-[8px] line-clamp-2">{product.name}</div>
      </td>
      <td>
        <div className="">{product.brand}</div>
      </td>
      <td className="">
        <div className="flex flex-row items-center justify-start">
          <div>{formatMoney(product.price)}</div>
          <div className="ml-[4px]">đ</div>
        </div>
      </td>
      <td>{product.discountRate}</td>
      <td>{product.ratingAverage}</td>
      <td>{product.reviewCount}</td>
      <td>{product.quantitySold}</td>
    </>
  );
};

export default ProductRow;
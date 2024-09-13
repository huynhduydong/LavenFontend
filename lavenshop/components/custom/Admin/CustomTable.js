import { Checkbox } from "@radix-ui/react-checkbox";
import { CustomCheckbox } from "./CustomCheckbox";

const CustomTable = ({ data, renderRow, field }) => {
  return (
    <table className="text-left border-0 border-collapse table-fixed w-full">
      <thead>
        <tr className="border-b-[1px] border-gray-300 w-full">
          {/* <th>
            <CustomCheckbox />
          </th> */}
          {field.map((item, index) => (
            <th
              style={{
                width:
                  item === "Tên"
                    ? "36%"
                    : item === "Ảnh"
                    ? "6%"
                    : item === "Giảm giá" || item === "Đánh giá"
                    ? "7%"
                    : item === "Giá" || item === "Hãng"
                    ? "11%"
                    : "9.5%",
              }}
              key={index}
            >
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr
            className="border-b-[1px] border-gray-300 cursor-pointer"
            key={index}
          >
            {renderRow(item, index)}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomTable;
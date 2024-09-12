const CustomTable = ({ data, renderRow, field }) => {
    return (
      <table className="text-left border-0 border-collapse table-fixed w-full">
        <thead>
          <tr className="border-b-[1px] border-gray-300 w-full">
            {field.map((item, index) => (
              <th
                style={{
                  width:
                    item === "Tên"
                      ? "35%"
                      : item === "Ảnh"
                      ? "5%"
                      : item === "Giảm giá" || item === "Đánh giá"
                      ? "8%"
                      : item === "Giá" || item === "Hãng"
                      ? "12%"
                      : "10%",
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
              {renderRow(item)}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default CustomTable;
import trimText from "@/utils/trimText";

const UserRow = ({ user, className, onSelected }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <>
      {/* Tên */}
      <td className={className + " rounded-l-[4px]"} onClick={onSelected}>
        <div className="px-[4px]">{user.name}</div>
      </td>

      {/* Email */}
      <td className={className} onClick={onSelected}>
        <div className="">{user.email}</div>
      </td>

      {/* Tên đăng nhập */}
      <td className={className} onClick={onSelected}>
        <div className="">{user.username}</div>
      </td>

      {/* Số điện thoại */}
      <td className={className} onClick={onSelected}>
        <div className="">{user.phone}</div>
      </td>

      {/* Giới tính */}
      <td className={className} onClick={onSelected}>
        <div className="">{user.gender}</div>
      </td>

      {/* Ngày sinh */}
      <td className={className + " rounded-r-[4px]"} onClick={onSelected}>
        <div className="py-[12px]">
          {user?.dateOfBirth ? formatDate(user.dateOfBirth) : ""}
        </div>
      </td>
       {/* Trạng thái (Active) */}
       <td className={className + " rounded-r-[4px]"} onClick={onSelected}>
        <div className={`py-[12px] font-bold ${user.active ? "text-green-600" : "text-red-600"}`}>
          {user.active ? "Hoạt động" : "Vô hiệu hóa"}
        </div>
      </td>

    </>
  );
};

export default UserRow;

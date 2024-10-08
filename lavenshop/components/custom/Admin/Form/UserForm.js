import ImagePicker from "@/components/custom/Admin/ImagePicker";
import iconPlusBlue from "@/public/ic_admin/ic_plus_blue.svg";
import Image from "next/image";

export const UserInfoForm = ({
  name,
  onNameChange,
  email,
  onEmailChange,
  username,
  onUsernameChange,
  phone,
  onPhoneChange,
  gender,
  onGenderChange,
  dateOfBirth,
  onDateOfBirthChange,
  active,
  disabled,
}) => {
  return (
    <div className="flex flex-col items-start justify-start w-full h-[500px] overflow-y-scroll py-[8px]">
      {/* User general information */}
      <div className="flex flex-row w-full">
        <div className="w-full p-[16px] bg-white rounded-[8px] border-[1.5px] border-gray-300 flex flex-grow flex-col mr-[16px] mt-[16px]">
          <div className="text-base text-black font-semibold">
            Thông tin người dùng
          </div>
          
          <div className="flex flex-col items-start justify-start bg-white mt-[12px] flex-grow">
            <div className="w-full mt-[12px]">
              <div className="text-sm font-semibold text-black flex flex-col justify-start items-start">
                Tên:
              </div>
              <div className="w-full relative flex items-center justify-center flex-row">
                <input
                  disabled={disabled || false}
                  value={name || ""}
                  onChange={onNameChange}
                  type="text"
                  className="border-[1.5px] border-gray-300 bg-gray-50 focus:outline-none focus:border-blue-600 focus:border-[1.5px] text-black text-sm py-[8px] px-[16px] rounded-[6px] w-full mt-[4px] pr-[32px]"
                />
              </div>
            </div>
            <div className="w-full mt-[12px]">
              <div className="text-sm font-semibold text-black flex flex-col justify-start items-start">
                Email:
              </div>
              <div className="w-full relative flex items-center justify-center flex-row">
                <input
                  disabled={disabled || false}
                  value={email || ""}
                  onChange={onEmailChange}
                  type="email"
                  className="border-[1.5px] border-gray-300 bg-gray-50 focus:outline-none focus:border-blue-600 focus:border-[1.5px] text-black text-sm py-[8px] px-[16px] rounded-[6px] w-full mt-[4px] pr-[32px]"
                />
              </div>
            </div>
            <div className="w-full mt-[12px]">
              <div className="text-sm font-semibold text-black flex flex-col justify-start items-start">
                Tên đăng nhập
              </div>
              <div className="w-full relative flex items-center justify-center flex-row">
                <input
                  disabled={disabled || false}
                  value={username || ""}
                  onChange={onUsernameChange}
                  type="email"
                  className="border-[1.5px] border-gray-300 bg-gray-50 focus:outline-none focus:border-blue-600 focus:border-[1.5px] text-black text-sm py-[8px] px-[16px] rounded-[6px] w-full mt-[4px] pr-[32px]"
                />
              </div>
            </div>

            <div className="w-full mt-[12px]">
              <div className="text-sm font-semibold text-black flex flex-col justify-start items-start">
                Số điện thoại
              </div>
              <div className="w-full relative flex items-center justify-center flex-row">
                <input
                  disabled={disabled || false}
                  value={phone || ""}
                  onChange={onPhoneChange}
                  type="tel"
                  className="border-[1.5px] border-gray-300 bg-gray-50 focus:outline-none focus:border-blue-600 focus:border-[1.5px] text-black text-sm py-[8px] px-[16px] rounded-[6px] w-full mt-[4px] pr-[32px]"
                />
              </div>
            </div>

            <div className="w-full mt-[12px]">
              <div className="text-sm font-semibold text-black flex flex-col justify-start items-start">
                Giới tính
              </div>
              <div className="w-full relative flex items-center justify-center flex-row">
                <select
                  id="gender"
                  value={gender}
                  onChange={onGenderChange}
                  disabled={disabled}
                  className="border-[1.5px] border-gray-300 bg-gray-50 focus:outline-none focus:border-blue-600 focus:border-[1.5px] text-black text-sm py-[8px] px-[16px] rounded-[6px] w-full mt-[4px] pr-[32px]"
                >
                  <option value="">Chọn giới tính</option>
                  <option value="male">Nam</option>
                  <option value="female">Nữ</option>
                  <option value="other">Khác</option>
                </select>
              </div>
            </div>

            <div className="w-full mt-[12px]">
              <div className="text-sm font-semibold text-black flex flex-col justify-start items-start">
                Ngày sinh
              </div>
              <div className="w-full relative flex items-center justify-center flex-row">
                <input
                  id="dateOfBirth"
                  type="date"
                  value={dateOfBirth}
                  onChange={onDateOfBirthChange}
                  disabled={disabled}
                  className="border-[1.5px] border-gray-300 bg-gray-50 focus:outline-none focus:border-blue-600 focus:border-[1.5px] text-black text-sm py-[8px] px-[16px] rounded-[6px] w-full mt-[4px] pr-[32px]"
                />
              </div>
            </div>
            <div className="w-full mt-[12px]">
  <div className="text-sm font-semibold text-black flex flex-col justify-start items-start">
    Trạng thái
  </div>
  <div className="w-full relative flex items-center justify-center flex-row">
    <input
      disabled={disabled || false}
      value={active ? "Hoạt động" : "Đã khóa"} 
      type="text" 
      className="border-[1.5px] border-gray-300 bg-gray-50 focus:outline-none focus:border-blue-600 focus:border-[1.5px] text-black text-sm py-[8px] px-[16px] rounded-[6px] w-full mt-[4px] pr-[32px]"
    />
  </div>
</div>

          </div>
        </div>
      </div>
    </div>
  );
};

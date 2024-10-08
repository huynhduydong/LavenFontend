"use client";

import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import icPlus from "@/public/ic_admin/ic_plus.svg";
import icEditBlue from "@/public/ic_admin/ic_edit_blue.svg";
import icBin from "@/public/ic_admin/ic_bin.svg";
import { PaginationSelection } from "@/components/HomePage";
import CustomTable from "@/components/custom/Admin/Table/CustomTable";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  createUser,
  deleteUserById,
  getAllUsers,
  getUserById,
  searchUserByUsername,
  updateUserById, deactivateUserById, activateUserById
} from "@/services/userServices";
import SearchInput from "@/components/custom/SearchInput";
import { CustomCreateDialog } from "@/components/custom/Admin/CustomCreateDialog";
import { CustomUpdateDialog } from "@/components/custom/Admin/CustomUpdateDialog";
import { CustomAlertDialog } from "@/components/custom/Admin/CustomAlertDialog";
import { UserInfoForm } from "@/components/custom/Admin/Form/UserForm";
import UserRow from "@/components/custom/Admin/Table/UserRow";
import { CustomViewDialog } from "@/components/custom/Admin/CustomViewDialog";
import { getAccessToken } from "@/services/authServices";

const UserAdminPage = () => {
  const [userList, setUserList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [totalItems, setTotalItems] = useState(0);
  const userField = [
    { name: "Họ và tên", width: "15%" },
    { name: "Email", width: "15%" },
    { name: "Tên đăng nhập", width: "15%" },
    { name: "Số điện thoại", width: "10%" },
    { name: "Giới tính", width: "10%" },
    { name: "Ngày sinh", width: "10%" },
    { name: "Trạng thái", width: "10%" },
  ];

  const [selectedUser, setSelectedUser] = useState(-1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [active, setActive] = useState(false);

  const getSearchUserData = async () => {
    let token = "";
    try {
      token = await getAccessToken();
    } catch (error) {
      console.log(error);
    }
    const data = await searchUserByUsername(token, searchKey, currentPage, itemsPerPage);
    console.log("Search:", data);
    setUserList(data.content);
    setTotalItems(data.totalElements);
  };

  const getUserData = async () => {
    let token = "";
    try {
      token = await getAccessToken();
    } catch (error) {
      console.log(error);
    }
    const data = await getAllUsers(token, currentPage, itemsPerPage);
    console.log(data);
    setUserList(data?.content);
    console.log("userlist" + userList);
    setTotalItems(data.totalElements);
  };

  const resetState = () => {
    setName("");
    setEmail("");
    setUsername("");
    setPhone("");
    setGender("");
    setDateOfBirth("");
    setActive(false);

  };

  const showError = (errorArr) => {
    errorArr.forEach((error) => {
      toast.error(error[1]);
    });
  };

  useEffect(() => {
    if (searchKey && searchKey.length > 0) {
      getSearchUserData();
    } else {
      getUserData();
    }
  }, [currentPage]);
  useEffect(() => {
    console.log("User List:", userList);
  }, [userList]);
  return (
    <div className="flex flex-col justify-between items-center h-full">
      {/* Search bar */}
      <div className="flex flex-row items-center w-full border-b-[1px] border-gray-300 px-[32px] py-[10px]">
        <div className="flex flex-row items-center mr-[64px]">
          <div className="text-[18px] font-semibold">Total Users</div>
          <div className="px-[8px] py-[1px] bg-blue-600 text-white text-[14px] rounded-[16px] ml-[12px] flex items-center justify-center">
            {totalItems}
          </div>
        </div>

        <div className="grow">
          <SearchInput
            placeholder={"Enter username..."}
            value={searchKey}
            onValueChange={(e) => setSearchKey(e.target.value)}
            onSubmit={(e) => {
              e.preventDefault();
              if (searchKey && searchKey.length > 0) {
                getSearchUserData();
              } else {
                getUserData();
              }
            }}
          />
        </div>

        <div className="flex flex-row justify-center items-center gap-[16px] ml-[64px]">
          {/* View User */}
          <CustomViewDialog
            itemTrigger={
              <button
                className="border-blue-600 border-[1px] px-[20px] py-[6px] rounded-[8px] hover:drop-shadow-xl hover:opacity-80 flex flex-row items-center justify-center bg-blue-50 w-[110px]"
                style={{ opacity: selectedUser != -1 ? 1 : 0 }}
                disabled={selectedUser == -1}
                onClick={async () => {
                  resetState();
                  const user = userList[selectedUser];
                  setName(user.name);
                  setEmail(user.email);
                  setUsername(user.username);
                  setPhone(user.phone);
                  setGender(user.gender);
                  setDateOfBirth(user.dateOfBirth);
                  setActive(user.active);
                }}
              >
                <div className="text-blue-600 text-[14px] font-bold ml-[4px]">
                  Xem
                </div>
              </button>
            }
            title={`User: ${selectedUser != -1 && userList[selectedUser].username}`}
            itemContent={
              <UserInfoForm
                name={name}
                email={email}
                username={username}
                phone={phone}
                gender={gender}
                dateOfBirth={dateOfBirth}
                active={active}
                disabled={true}
              />
            }
          />

          {/* Delete/Lock User */}
          <CustomAlertDialog
            itemTrigger={
              <button
                className="border-red-500 border-[1px] px-[20px] py-[6px] rounded-[8px] hover:drop-shadow-xl hover:opacity-80 flex flex-row items-center justify-center bg-red-50 w-[110px]"
                style={{ opacity: selectedUser != -1 ? 1 : 0 }}
                disabled={selectedUser == -1}
              >
                <Image alt="Bin icon" src={icBin} width={12} height={12} />
                <div className="text-red-500 text-[14px] font-bold ml-[4px]">
                  {userList[selectedUser]?.active ? "Khóa" : "Kích hoạt"}
                </div>
              </button>
            }
            title={`${userList[selectedUser]?.active ? "Vô hiệu hóa" : "Kích hoạt"} người dùng: ${userList[selectedUser]?.username}`}
            content={`Bạn có chắc chắn muốn  
 ${userList[selectedUser]?.active ? "vô hiệu hóa" : "kích hoạt"} người dùng này không?`}
            cancelContent={"Hủy"}
            confirmContent={userList[selectedUser]?.active ? "Vô hiệu hóa" : "Kích hoạt"}
            onConfirm={async () => {
              let token = "";
              try {
                token = await getAccessToken();

              } catch (error) {
                console.log(error);
              }
              let res;
              if (userList[selectedUser]?.active) {
                // Deactivate user
                res = await deactivateUserById(token, userList[selectedUser].id);
              } else {
                // Activate user
                res = await activateUserById(token, userList[selectedUser].id);
              }

              console.log(res);
              if (res.status == 200) {
                toast.success(`User ${userList[selectedUser]?.active ? "Vô hiệu hóa" : "Kích hoạt"} thành công`);
                await getUserData();
                setSelectedUser(-1);
              } else {
                const errorArray = Object.entries(res.data);
                showError(errorArray);
              }
            }}
          />

          {/* Update User */}
          <CustomUpdateDialog
            confirmDialogTitle={"Are you sure you want to update this user's information?"}
            confirmDialogContent={"The user's information will be saved to the system."}
            confirmContent={"Update"}
            onConfirm={async () => {
              let token = "";
              try {
                token = await getAccessToken();
                console.log(token);
              } catch (error) {
                console.log(error);
              }
              const res = await updateUserById(
                {
                  name: name,
                  email: email,
                  username: username,
                  phone: phone,
                  gender: gender,
                  dateOfBirth: dateOfBirth,
                },
                token,
                userList[selectedUser].id
              );
              console.log(res);
              if (res.status == 200) {
                toast.success("User updated successfully");
                await getUserData();
                resetState();
              } else {
                const errorArray = Object.entries(res.data);
                showError(errorArray);
              }
            }}
            onCancel={() => {
              console.log("Cancel update user");
              resetState();
            }}
            itemTrigger={
              <button
                className="border-blue-600 border-[1px] px-[20px] py-[6px] rounded-[8px] hover:drop-shadow-xl hover:opacity-80 flex flex-row items-center justify-center bg-blue-50 w-[110px]"
                style={{ opacity: selectedUser != -1 ? 1 : 0 }}
                disabled={selectedUser == -1}
                onClick={() => {
                  resetState();
                  const user = userList[selectedUser];
                  setName(user.name);
                  setEmail(user.email);
                  setUsername(user.username);
                  setPhone(user.phone);
                  setGender(user.gender);
                  setDateOfBirth(user.dateOfBirth);
                  setActive(user.active);
                }}
              >
                <Image alt="Edit icon" src={icEditBlue} width={12} height={12} />
                <div className="text-blue-600 text-[14px] font-bold ml-[4px]">
                  Sửa
                </div>
              </button>
            }
            title={"Update User Information"}
            itemContent={
              <UserInfoForm
                name={name}
                onNameChange={(e) => {
                  setName(e.target.value);
                }}
                email={email}
                onEmailChange={(e) => {
                  setEmail(e.target.value);
                }}
                username={username}
                onUsernameChange={(e) => {
                  setUsername(e.target.value);
                }}
                phone={phone}
                onPhoneChange={(e) => {
                  setPhone(e.target.value);
                }}
                gender={gender}
                onGenderChange={(e) => {
                  setGender(e.target.value);
                }}
                dateOfBirth={dateOfBirth}
                onDateOfBirthChange={(e) => {
                  setDateOfBirth(e.target.value);
                }}
                active={active}
              />
            }
          />

          {/* Create User */}
          <CustomCreateDialog
            confirmDialogTitle={"Are you sure you want to add this user?"}
            confirmDialogContent={"The user's information will be added to the system."}
            confirmContent={"Add"}
            onConfirm={async () => {
              let token = "";
              try {
                token = await getAccessToken();
              } catch (error) {
                console.log(error);
              }
              const res = await createUser(
                {
                  name: name,
                  email: email,
                  username: username,
                  phone: phone,
                  gender: gender,
                  dateOfBirth: dateOfBirth,
                  // active: active,
                },
                token
              );
              console.log(res);
              if (res.status == 201) {
                toast.success("User added successfully");
                await getUserData();
                setSelectedUser(-1);
                resetState();
              } else {
                const errorArray = Object.entries(res.data);
                showError(errorArray);
              }
            }}
            onCancel={() => {
              console.log("Cancel create user");
              resetState();
            }}
            itemTrigger={
              <button className="bg-blue-600 px-[20px] py-[6px] rounded-[8px] hover:drop-shadow-xl hover:opacity-80 flex flex-row items-center justify-center w-[110px]">
                <Image alt="Plus icon" src={icPlus} width={12} height={12} />
                <div className="text-white text-[14px] font-bold ml-[4px]">
                  Thêm
                </div>
              </button>
            }
            title={"Add User"}
            itemContent={
              <UserInfoForm
                name={name}
                email={email}
                username={username}
                phone={phone}
                gender={gender}
                dateOfBirth={dateOfBirth}
                active={active}
              />
            }
          />
        </div>
      </div>

      {/* User table data */}
      <div className="flex flex-col justify-between items-center grow px-[32px] py-[20px] w-full">
        <CustomTable
          data={userList}
          renderRow={(item, index) => (
            <UserRow
              key={index}
              user={item}
              onSelected={() => {
                selectedUser == index
                  ? setSelectedUser(-1)
                  : setSelectedUser(index);
              }}
              className={selectedUser == index ? "bg-blue-200" : ""}
            />
          )}
          field={userField}
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
      <ToastContainer position="top-center" />
    </div>
  );
};

export default UserAdminPage;

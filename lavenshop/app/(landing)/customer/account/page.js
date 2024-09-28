"use client";

import { useState, useEffect } from "react";
import { getAccessToken, getSession } from "@/services/authServices";
import { getUserByProfile } from "@/services/userServices";
import { DatePicker } from "@/components/custom/DatePicker";

const accountPage = () => {
  const [userInfo, setUserInfo] = useState();
  const [date, setDate] = useState();

  useEffect(() => {
    const fetchUserInfo = async () => {
      const session = await getSession();
      const accessToken = await getAccessToken();
      if (session) {
        const data = await getUserByProfile(accessToken);
        console.log(">>> check user: ", data);
        setUserInfo(data);
      }
    };
    fetchUserInfo();
  }, []);
  const handleUpdateProfile = async () => {
   
    }
  return (
    <>
      {userInfo && (
        <div className="bg-white h-fit pb-10 rounded-md">
          <div className="mx-auto max-w-270 mt-[20px]">
            {/* <Breadcrumb pageName="Settings" /> */}

            <div className="rounded-sm bg-white shadow-default">
              <div className="px-7 py-4">
                <h3 className="text-xl font-medium text-black">
                  Thông tin cá nhân
                </h3>
              </div>
              <div className="px-7">
                <div className="mb-5.5 pt-2">
                  <label
                    className="mb-3 block text-sm font-medium text-black "
                    htmlFor="fullName"
                  >
                    Họ & Tên
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                        />
                      </svg>
                    </span>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 pl-10 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      name="fullName"
                      id="fullName"
                      placeholder="Thêm họ tên"
                      defaultValue={`${userInfo?.name}`}
                    />
                  </div>
                </div>

                <div className="mb-5.5 pt-2">
                  <label
                    className="mb-3 block text-sm font-medium text-black dark:text-white"
                    htmlFor="emailAddress"
                  >
                    Địa chỉ Email
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                        />
                      </svg>
                    </span>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 pl-10 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="email"
                      name="emailAddress"
                      id="emailAddress"
                      placeholder="Thêm địa chỉ email"
                      defaultValue={`${userInfo?.email}`}
                    />
                  </div>
                </div>

                <div className="mb-5.5 pt-2">
                  <label
                    className="mb-3 block text-sm font-medium text-black dark:text-white"
                    htmlFor="Username"
                  >
                    Username
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                        />
                      </svg>
                    </span>

                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 pl-10 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      name="Username"
                      id="Username"
                      placeholder="Thêm username"
                      defaultValue={`${userInfo?.username}`}
                    />
                  </div>
                </div>
                <div className="my-2">
                  <div className="mb-5.5 flex flex-col sm:flex-row">
                    <div className="w-fit sm:w-1/2">
                      <label
                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                        htmlFor="Username"
                      >
                        Ngày sinh
                      </label>
                      <DatePicker date={date} setDate={setDate} />
                    </div>

                    <div className="w-full">
                      <label
                        className="mb-3 block text-sm font-medium text-black"
                        htmlFor="phoneNumber"
                      >
                        Số điện thoại
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                            />
                          </svg>
                        </span>
                        <input
                          className="w-full rounded border border-stroke bg-gray py-3 pl-10 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                          type="text"
                          name="phoneNumber"
                          id="phoneNumber"
                          placeholder="Thêm số điện thoại"
                          defaultValue="+990 3343 7865"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="mb-5.5 pt-2">
                  <div className="flex gap-2">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="Username"
                    >
                      Đổi mật khẩu
                    </label>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div> */}

                {/* Các nút lưu và hủy ở cột 1*/}
                <div className="flex justify-end gap-2 mt-4">
                  <button
                    className="flex justify-center rounded border border-stroke px-6 py-2 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
                    type="submit"
                  >
                    Hủy
                  </button>
                  <button
                    className="flex justify-center rounded bg-primary px-6 py-2 font-medium text-white hover:bg-opacity-90"
                    type="submit"
                    // onClick={() => handleUpdateProfile()}
                  >
                    Lưu
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default accountPage;
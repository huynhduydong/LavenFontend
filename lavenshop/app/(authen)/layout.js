import HeaderWithoutSearch from "@/components/HeaderWithoutSearch";

export default function LoginLayout({ children }) {
  return (
    <>
      <HeaderWithoutSearch pageTitle={"Đăng nhập"}></HeaderWithoutSearch>
      {children}
    </>
  );
}
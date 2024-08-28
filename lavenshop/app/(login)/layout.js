import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function LoginLayout({ children }) {
  return (
    <>
      <h1>login layout</h1>
      {children}
    </>
  );
}
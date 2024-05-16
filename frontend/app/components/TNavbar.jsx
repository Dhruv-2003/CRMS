"use client";

import Image from "next/image";
import logo from "../assets/images/logo.svg";
import star from "../assets/images/star.svg";
import search from "../assets/images/search.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TNavbar = () => {
  const pathname = usePathname();
  const isActive = pathname === "/teacher";
  const pathname2 = usePathname();
  const isActive2 = pathname === "/teacher/upload";
  const pathname3 = usePathname();
  const isActive3 = pathname === "/teacher/assignment";
  return (
    <nav className="bg-[#B4D4FF] min-h-screen flex flex-col items-center fixed top-0 left-0 px-4">
      <div>
        <Link href="/">
          <Image src={logo} width={140} height={60} className="pt-10 pb-32" />
        </Link>
        <div>
          <button
            className={`btn ${
              isActive
                ? "bg-[#86B6F6] flex justify-center items-center rounded-full w-30 px-2 py-2"
                : "flex justify-center items-center w-30 px-2 py-2 "
            }`}
          >
            <Image src={search} width={27} height={27} />
            <Link href="/teacher">
              <span className="block ml-3">browse courses</span>
            </Link>
          </button>
          <button
            className={`btn ${
              isActive2
                ? "bg-[#86B6F6] flex justify-center items-center rounded-full py-2 w-30 px-2 mt-10"
                : "flex justify-center items-center mt-10 py-2 rounded-full w-30 px-2"
            }`}
          >
            <Image src={star} width={27} height={27} />
            <Link href="/teacher/upload">
              <span className="block ml-3">Upload courses</span>
            </Link>
          </button>
          <button
            className={`btn ${
              isActive3
                ? "bg-[#86B6F6] flex justify-center items-center rounded-full py-2 w-30 px-2 mt-10"
                : "flex justify-center items-center mt-10 py-2 rounded-full w-30 px-2"
            }`}
          >
            <Image src={star} width={27} height={27} />
            <Link href="/teacher">
              <span className="block ml-3">Add Assignments</span>
            </Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default TNavbar;

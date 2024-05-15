import Image from "next/image";
import logo from "../app/assets/images/logo.svg";
import bg from "../app/assets/images/bg.svg";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#EEF5FF]">
      <header className="mt-10">
        <Image src={logo} width={140} height={50} />
      </header>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-7xl text-center ">
          Your path to <span className="text-[#86B6F6]">success</span> <br />{" "}
          starts here
        </h1>
        <p className="text-md text-center my-5">
          Lorem ipsum dolor sit amet consectetur. Massa gravida viverra nulla
          tortor eu dui.
          <br /> Massa gravida viverra nulla tortor eu dui.
        </p>
        <button className="bg-[#16191D] text-white my-4 px-8 py-3 rounded-full text-md">
          <Link href="/student">Get Started</Link>
        </button>
      </div>
      <Image src={bg} width={1200} height={1200} />
    </main>
  );
}

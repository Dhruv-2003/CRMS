import Link from "next/link";
import Book from "../assets/images/book.jpg";
import star from "../assets/images/star.svg";
import Image from "next/image";
function Card() {
  return (
    <section className="max-w-[350px] h-full mx-4 my-4 shadow-lg">
      <div>
        <Image src={Book} className="rounded-t-xl" />
      </div>
      <div className="bg-[#B4D4FF] rounded-b-xl py-4 text-[#16191D]">
        <div className="flex justify-between pt-4 px-4">
          <h3>Card Title</h3>
          <Image src={star} className="" />
        </div>
        <p className="mt-4 px-4">
          Lorem ipsum dolor sit amet consectetur. Massa gravida viverra nulla
          tortor eu dui....
        </p>
        <div className="flex justify-end items-center">
          <button className="bg-black text-white py-2 w-24 rounded-full mr-4 mt-4">
            <Link href="/student/coursedetails">View</Link>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Card;

import Link from "next/link";
import Book from "../assets/images/book.jpg";
import star from "../assets/images/star.svg";
import Image from "next/image";

function Card(props) {
  return (
    <section className="max-w-[350px] h-full mx-4 my-4 shadow-lg">
      <div>
        <Image src={Book} className="rounded-t-xl" />
      </div>
      <div className="bg-[#B4D4FF] rounded-b-xl py-4 text-[#16191D]">
        <div className="flex justify-between pt-4 px-4">
          <h2>{props.course ? props.course.name : "Course Title"}</h2>
          <Image src={star} className="" />
        </div>
        <p className="mt-4 px-4">
          {props.course
            ? props.course.description.slice(0, 180)
            : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
        </p>
        <div className="flex justify-end items-center">
          {props.isTeacher ? (
            <button className="bg-black text-white py-2 w-80 rounded-full mr-4 mt-4">
              <Link href={`/teacher/assignment/${props.course.id}`}>
                Add Assignment
              </Link>
            </button>
          ) : (
            <button className="bg-black text-white py-2 w-24 rounded-full mr-4 mt-4">
              <Link href={`/student/coursedetails/${props.course.id}`}>
                View
              </Link>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default Card;

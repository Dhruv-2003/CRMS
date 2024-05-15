import React from "react";

function page() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h3 className="text-3xl mt-14 text-[rgb(134,182,246)] mb-10 ">
        Add Assignments
      </h3>
      <div className="bg-[#B4D4FF] w-4/5 p-20 rounded-3xl shadow-lg">
        <div className="relative">
          <h3 className="text-2xl mb-4">Course Name</h3>
          <button className="absolute right-0 bottom-0 bg-black mt-2 text-white px-6 py-2 rounded-full">
            Add
          </button>
        </div>
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur. Massa gravida viverra nulla
          tortor eu dui....
        </p>
        <h3 className="text-2xl mb-4">Assignment discription</h3>
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur. Massa gravida viverra nulla
          tortor eu dui Lorem ipsum dolor sit amet consectetur. Massa gravida
          viverra nulla tortor eu duiLorem ipsum dolor sit amet consectetur.
          Massa gravida viverra nulla tortor eu duiLorem ipsum dolor sit amet
          consectetur. Massa gravida viverra nulla tortor eu dui
        </p>
      </div>
    </div>
  );
}

export default page;

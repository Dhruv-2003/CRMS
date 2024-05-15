import Image from "next/image";
import React from "react";
import upload from "../../assets/images/upload.svg";

function page() {
  return (
    <div className="w-full">
      <h3 className="text-3xl mt-14 text-[#86B6F6] mb-10 ">Upload Course</h3>
      <div className="flex justify-center flex-col items-center h-[700px] w-[700px] bg-[#B4D4FF] rounded-3xl">
        <Image src={upload} width={53} className="my-4" />
        <h3 className="text-3xl my-4">Upload Course Material </h3>
        <textarea
          className="w-4/5 py-4 rounded-2xl px-4 outline-none bg-[#EEF5FF]"
          placeholder="add text here...."
        ></textarea>
        <span className="block my-4 bg-[#EEF5FF] w-4/5 py-2 px-2 rounded-full">
          <span className="rounded-full px-2  bg-[#404040] text-white text-2xl inline-block mr-4">
            A
          </span>
          Abbas khan-cs-4sem
        </span>
        <span className="block my-4 bg-[#EEF5FF] w-4/5 py-2 px-2 rounded-full">
          <span className="rounded-full px-2  bg-[#404040] text-white text-2xl inline-block mr-4">
            A
          </span>
          Abbas khan-cs-4sem
        </span>
        <span className="block my-4 bg-[#EEF5FF] w-4/5 py-2 px-2 rounded-full">
          <span className="rounded-full px-2  bg-[#404040] text-white text-2xl inline-block mr-4">
            A
          </span>
          Abbas khan-cs-4sem
        </span>
        <span className="block my-4 bg-[#EEF5FF] w-4/5 py-2 px-2 rounded-full">
          <span className="rounded-full px-2  bg-[#404040] text-white text-2xl inline-block mr-4">
            A
          </span>
          Abbas khan-cs-4sem
        </span>
      </div>
    </div>
  );
}

export default page;

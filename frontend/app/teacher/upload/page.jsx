"use client";

import Image from "next/image";
import React, { useState } from "react";
import upload from "../../assets/images/upload.svg";
import { addNewCourse, storeFile } from "../../firebase/methods";
import { useAccount } from "wagmi";
import { toast } from "sonner";

function page() {
  const [courseFile, setCourseFile] = useState();
  const [courseName, setCourseName] = useState();
  const [courseDescription, setCourseDescription] = useState();
  const { address } = useAccount();

  const uploadCourse = async () => {
    if (!courseFile || !courseName || !courseDescription) {
      toast.error("Please fill all the fields");
      return alert("Please fill all the fields");
    }
    if (!address) {
      toast.error("Please connect your wallet");
      return alert("Please connect your wallet");
    }

    toast.loading("Uploading file");
    const coursePDFLink = await storeFile(courseFile);
    if (!coursePDFLink) {
      toast.error("Failed to upload file");
      return alert("Failed to upload file");
    }
    toast.dismiss();
    const courseData = {
      courseName: courseName,
      teacherAddress: address,
      description: courseDescription,
      pdfLink: coursePDFLink,
    };

    toast.loading("Adding new course");
    console.log("Adding new course", courseData);

    await addNewCourse(courseData);
    console.log("Course added successfully");

    toast.dismiss();
    toast.success("Course added successfully");
  };

  return (
    <div className="w-full">
      <h3 className="text-3xl mt-14 text-[#86B6F6] mb-10 ">Upload Course</h3>
      <div className="flex justify-center flex-col items-center h-[700px] w-[700px] bg-[#B4D4FF] rounded-3xl">
        {/* <h3 className="text-3xl my-4">Upload Course Material </h3> */}
        <Image src={upload} width={53} className="my-4" />
        <input type="file" class="hidden" id="fileInput" />

        <input
          className="hidden"
          type="file"
          id="fileInput"
          onChange={(e) => {
            if (e.target.files[0]) {
              console.log(e.target.files[0]);
              setCourseFile(e.target.files[0]);
            }
          }}
        ></input>
        <label
          for="fileInput"
          class=" text-white py-2 px-4 cursor-pointer bg-[#5AA0FD] rounded-full"
        >
          Upload File
        </label>

        <input
          className="mt-4 w-4/5 py-4 rounded-2xl px-4 outline-none bg-[#EEF5FF]"
          placeholder="Add Title here .."
          type="text"
          onChange={(e) => {
            setCourseName(e.target.value);
          }}
        ></input>
        <textarea
          className=" mt-4 w-4/5 py-4 rounded-2xl px-4 outline-none bg-[#EEF5FF]"
          placeholder="Add Description here .."
          onChange={(e) => {
            setCourseDescription(e.target.value);
          }}
        ></textarea>

        <span className="block my-4 bg-[#EEF5FF] w-4/5 py-2 px-2 rounded-full">
          <span className="rounded-full px-2  bg-[#404040] text-white text-2xl inline-block mr-4">
            A
          </span>
          Abbas khan-cs-3sem
        </span>
        <span className="block my-4 bg-[#EEF5FF] w-4/5 py-2 px-2 rounded-full">
          <span className="rounded-full px-2  bg-[#404040] text-white text-2xl inline-block mr-4">
            A
          </span>
          Abbas khan-cs-4sem
        </span>
        <button
          onClick={() => uploadCourse()}
          className=" mr-15 mt-8 bg-[#5AA0FD] py-2 px-4 rounded-full text-white w-4/5"
        >
          Upload Course
        </button>
      </div>
    </div>
  );
}

export default page;

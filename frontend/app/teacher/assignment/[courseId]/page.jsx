"use client";
import React, { useState } from "react";
import { addAssignment } from "../../../firebase/methods";
import { toast } from "sonner";

function Page({ params }) {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const courseId = params.courseId;
  // console.log(courseId);

  const handleAddAssignment = async () => {
    try {
      if (!name || !description) {
        toast.error("Please fill all the fields");
        return alert("Please fill all the fields");
      }

      if (!courseId) {
        toast.error("Course not found");
        return alert("Course not found");
      }

      toast.loading("Adding new assignment");
      await addAssignment({ name, description, courseId });

      toast.dismiss();
      toast.success("Assignment added successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h3 className="text-3xl mt-14 text-[rgb(134,182,246)] mb-10 ">
        Add Assignments
      </h3>
      <div className="bg-[#B4D4FF] w-[800px] p-20 rounded-3xl shadow-lg">
        <div className="relative">
          <h3 className="text-2xl mb-4">Assignment Name</h3>
          <button
            onClick={handleAddAssignment}
            className="absolute right-0 bottom-0 bg-black mt-2 text-white px-6 py-2 rounded-full"
          >
            Add
          </button>
        </div>
        <input
          className="ml-4 mb-4 w-[500px] py-4 rounded-2xl px-4 outline-none bg-[#EEF5FF]"
          placeholder="Add Title here .."
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>

        <h3 className="text-2xl mb-4">Assignment discription</h3>
        <textarea
          className="ml-4 mb-4 w-[500px] py-4 rounded-2xl px-4 outline-none bg-[#EEF5FF]"
          placeholder="Add Description here .."
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></textarea>
      </div>
    </div>
  );
}

export default Page;

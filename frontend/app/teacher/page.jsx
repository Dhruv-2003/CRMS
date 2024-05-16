"use client";

import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { getAllCourses } from "../firebase/methods";
import { toast } from "sonner";
import { Loading, Loader } from "../components/loader";

const Page = () => {
  const [courses, setCourses] = useState();

  const getCourses = async () => {
    try {
      toast.loading("Getting courses");
      console.log("getting courses");
      const courses = await getAllCourses();
      console.log(courses);
      setCourses(courses);
      toast.dismiss();
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (courses === undefined) {
      getCourses();
    }
  }, []);

  return (
    <div className="w-full ml-24">
      <h2 className="text-2xl mt-14 ml-10 text-[#86B6F6]">Popular courses</h2>
      <div className="flex justify-around w-full flex-wrap mt-10 ">
        {courses ? (
          courses.map((course, id) => {
            return <Card course={course} isTeacher={true} id={id} />;
          })
        ) : (
          <div>
            <Loader />
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;

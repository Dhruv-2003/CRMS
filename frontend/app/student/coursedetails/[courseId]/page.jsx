"use client";

import Book from "../../../assets/images/book.jpg";
import star from "../../../assets/images/star.svg";
import Image from "next/image";
import {
  addAssignmentToProfile,
  getAllAssignments,
  getAllUserAssignments,
  getCourse,
} from "../../../firebase/methods";
import { useEffect, useRef, useState } from "react";
import { useAccount } from "wagmi";
import { Loading, Loader } from "../../../components/loader";
import { toast } from "sonner";

const Page = ({ params }) => {
  const courseId = params.courseId;
  const [course, setCourse] = useState();
  const [assignments, setAssignments] = useState();
  const downloadLinkRef = useRef(null);
  const { address } = useAccount();

  const getCourseDetails = async () => {
    try {
      toast.loading("Getting courses");
      console.log("getting courses");
      const course = await getCourse({ courseId });
      console.log(course);
      setCourse(course);
      // console.log(course.createdAt.nanoseconds);
      const assignments = await getAllAssignments({ courseId });
      console.log(assignments);

      const userAssignments = await getAllUserAssignments({
        userAddress: address,
      });
      console.log(userAssignments);

      // match the assignment id with the user assignments and set the isCompleted to true
      assignments.forEach((assignment) => {
        const userAssignment = userAssignments.find(
          (userAssignment) => userAssignment.id === assignment.id
        );
        if (userAssignment) {
          assignment.isCompleted = userAssignment.completed;
        } else {
          assignment.isCompleted = false;
        }
      });

      console.log(assignments);

      setAssignments(assignments);
      toast.dismiss();
    } catch (e) {
      console.log(e);
    }
  };

  const handleCheckboxChange = async (e, assignmentId) => {
    try {
      console.log(e.target.checked);
      console.log(assignmentId);
      if (address === undefined) {
        return alert("Please connect your wallet");
      }

      addAssignmentToProfile({
        assignmentId,
        userAddress: address,
        isCompleted: e.target.checked,
      });

      const _assignments = [...assignments];

      const updatedAssignments = _assignments.map((assignment) => {
        if (assignment.id === assignmentId) {
          console.log("found");
          assignment.isCompleted = e.target.checked;
        }
        return assignment;
      });
      console.log(updatedAssignments);
      setAssignments(updatedAssignments);
      toast.success("Assignment updated successfully");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (course === undefined && courseId != undefined) {
      getCourseDetails();
    }
  }, []);

  const randomId = Math.random().toFixed(0) % 12;
  const imageLink = randomId < 12 ? `/${(randomId % 12) + 1}.png` : star;

  return (
    <div className="flex">
      <section className="max-w-[450px] h-full ml-20 mt-20 pt-14 shadow-lg">
        <div>
          <img src={imageLink} className="rounded-t-xl w-full" />
        </div>
        {course ? (
          <div className="bg-[#B4D4FF] rounded-b-xl py-4 text-[#16191D]">
            <div className="flex justify-between pt-4 px-4">
              <h2 className="text-xl text-black-700"> {course.name}</h2>
              <Image src={star} className="" />
            </div>
            <p className="text-l mt-4 px-4 mb-4">{course.description}</p>

            <h4 className="mt-4 px-4">
              Created At :{" "}
              {new Date(course.createdAt.seconds * 1000).toDateString()}
            </h4>

            <div className="flex justify-center items-center w-full px-4 pb-3">
              <a
                href={course.pdfLink}
                download="course.pdf"
                style={{ display: "none" }}
                ref={downloadLinkRef}
                target="_blank"
                rel="noopener noreferrer"
              ></a>
              <button
                onClick={() => downloadLinkRef.current.click()}
                className="bg-black text-white py-2 px-8 rounded-full mt-4 flex-grow "
              >
                Download
              </button>
            </div>
          </div>
        ) : (
          <div>
            Loading...
            {/* <Loading /> */}
          </div>
        )}
      </section>
      {/* GET STARTED SECTION */}

      <section className="ml-20 mt-20 mr-10">
        <h3 className="text-3xl">Get Started : Assignments</h3>
        {assignments
          ? assignments.map((assignment) => {
              return (
                <div className="bg-[#B4D4FF] mt-4 p-12 rounded-3xl">
                  <h3 className="text-xl mb-2">{assignment.name}</h3>
                  <p>{assignment.description.slice(0, 180)}...</p>
                  <label className="text-m ">
                    <input
                      type="checkbox"
                      className=" mt-4 py-4 px-10 mx-2"
                      checked={assignment.isCompleted}
                      onChange={(e) => {
                        handleCheckboxChange(e, assignment.id);
                      }}
                    />
                    Mark as Complete
                  </label>
                </div>
              );
            })
          : "No assignments"}
      </section>
    </div>
  );
};

export default Page;

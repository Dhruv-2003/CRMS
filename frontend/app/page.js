"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "../app/assets/images/logo.svg";
import bg from "../app/assets/images/bg.svg";
import Link from "next/link";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { auth, app } from "./firebase/config";
import { GoogleAuthProvider } from "firebase/auth";

export const uiConfig = {
  // signInFlow: "popup",
  signInSuccessUrl: "/",
  signinOptions: [GoogleAuthProvider.PROVIDER_ID],
};

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <main className="relative">
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        />
      )}
      <main
        className={`${
          isOpen ? "blur-sm " : ""
        } flex min-h-screen flex-col items-center justify-between bg-[#EEF5FF]`}
      >
        <header className="mt-10 flex justify-center items-center">
          <Image src={logo} width={140} height={50} />{" "}
          <span className="font-bold text-2xl">
            (Course resource management system)
          </span>
        </header>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-7xl text-center ">
            Your path to <span className="text-[#86B6F6]">success</span> <br />{" "}
            starts here
          </h1>
          <p className="text-sm text-center my-5 w-1/2">
            Welcome to our Course Resource Management System, where innovation
            meets education. Leveraging blockchain technology, we provide a
            secure and decentralized platform for students and teachers to
            connect and share knowledge. Students can access a vast library of
            courses, while teachers can upload and manage their resources with
            ease. Our platform empowers learners to take control of their
            educational journey, and enables educators to share their expertise
            with a global audience.
            <br /> Join us in revolutionizing the future of education!
          </p>
          <button
            className="bg-[#16191D] text-white my-4 px-8 py-3 rounded-full text-md"
            onClick={handleOpen}
          >
            Get Started
          </button>
        </div>
        <Image src={bg} width={1200} height={1200} />
      </main>
      {isOpen && (
        <div
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 overflow-y-auto w-[50vw] "
          aria-labelledby="modal-title"
          aria-hidden="true"
        >
          <div className="relative p-4 w-full h-full md:h-auto bg-[#EEF5FF] ">
            <div className="relative ">
              <div className="flex items-center justify-between pb-4 ">
                <h3
                  className="text-3xl text-[#86B6F6] font-medium leading-6"
                  id="modal-title"
                >
                  Select a role
                </h3>
                <button
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                  onClick={handleClose}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="(link unavailable)"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div className="p-6 text-lg">
                <div className="mt-4 flex flex-col justify-center items-center">
                  <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
                  <button
                    className=" mr-15 mt-8 bg-[#5AA0FD] py-2 px-4 rounded-full text-white w-4/5"
                    onClick={() => {
                      handleClose();
                      // Navigate to /student
                      window.location.href = "/student";
                    }}
                  >
                    Student
                  </button>
                  <button
                    className=" mr-15 mt-8 bg-[#5AA0FD] py-2 px-4 rounded-full text-white w-4/5"
                    onClick={() => {
                      handleClose();
                      // Navigate to /teacher
                      window.location.href = "/teacher";
                    }}
                  >
                    Teacher
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

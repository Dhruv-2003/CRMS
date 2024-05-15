"use client";

import {
  getFirestore,
  doc,
  setDoc,
  serverTimestamp,
  collection,
  addDoc,
  getDocs,
  getDoc,
} from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { app } from "./config";

const storage = getStorage(app);

// 1. upload PDF
export const storeFile = async (file: File): Promise<string | undefined> => {
  try {
    console.log("Uploading the file ....");
    const storageRef = ref(storage, `pdf/${file.name}`);

    // 'file' comes from the Blob or File API
    await uploadBytes(storageRef, file).then((snapshot) => {
      console.log("Uploaded a blob or file!");
    });

    const fileURL = await getDownloadURL(storageRef);
    console.log(fileURL);
    return fileURL;
  } catch (error) {
    console.log(error);
    return;
  }
};

// 2. new course with resource
export const addNewCourse = async ({
  courseName,
  teacherAddress,
  description,
  pdfLink,
}) => {
  try {
    const db = getFirestore();
    const colRef = collection(db, "Course");
    await addDoc(colRef, {
      name: courseName,
      description: description,
      createdAt: serverTimestamp(),
      createdBy: teacherAddress,
      pdfLink: pdfLink,
    });
  } catch (err) {
    console.log(err);
  }
};

// add assignment in the course

export const addAssignment = async ({ courseId, name, description }) => {
  try {
    const db = getFirestore();
    const colRef = collection(db, "Course", `${courseId}`, "Assignment");
    const docRef = await addDoc(colRef, {
      name: name,
      description: description,
      createdAt: serverTimestamp(),
    });
    console.log("Assignment added", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error(error);
  }
};

// get all the courses
export const getAllCourses = async () => {
  try {
    let courseData = [];
    const db = getFirestore();
    const colRef = collection(db, "Course");
    const querySnapshot = await getDocs(colRef);

    querySnapshot.forEach((doc) => {
      courseData.push({ ...doc.data(), id: doc.id });
    });

    return courseData;
  } catch (error) {
    console.log(error);
  }
};

export const getCourse = async ({ courseId }) => {
  try {
    const db = getFirestore();
    const docRef = doc(db, "Course", `${courseId}`);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      // console.log("Document data:", docSnap.data());
      return docSnap.data();
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  } catch (error) {
    console.log(error);
  }
};

// get all the courses
export const getAllAssignments = async ({ courseId }) => {
  try {
    let assignmentData = [];
    const db = getFirestore();
    const colRef = collection(db, "Course", `${courseId}`, "Assignment");
    const querySnapshot = await getDocs(colRef);

    querySnapshot.forEach((doc) => {
      assignmentData.push({ ...doc.data(), id: doc.id });
    });

    return assignmentData;
  } catch (error) {
    console.log(error);
  }
};

// create user profile & add assignment to their profile if marked complete
export const addAssignmentToProfile = async ({
  assignmentId,
  userAddress,
  isCompleted,
}) => {
  try {
    const db = getFirestore();
    const colRef = collection(db, "User", `${userAddress}`, "Assignment");
    await setDoc(doc(colRef, `${assignmentId}`), {
      completed: isCompleted,
      createdAt: serverTimestamp(),
    });
    console.log("Assignment added to profile");
  } catch (error) {
    console.error(error);
  }
};

// get all the courses
export const getAllUserAssignments = async ({ userAddress }) => {
  try {
    let assignmentData = [];
    const db = getFirestore();
    const colRef = collection(db, "User", `${userAddress}`, "Assignment");
    const querySnapshot = await getDocs(colRef);

    querySnapshot.forEach((doc) => {
      assignmentData.push({ ...doc.data(), id: doc.id });
    });

    return assignmentData;
  } catch (error) {
    console.log(error);
  }
};

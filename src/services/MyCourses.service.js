import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyArqKRq9A3zOc-usP1f2XtWncyAEbOKyHY",
  authDomain: "buff-course.firebaseapp.com",
  databaseURL: "https://buff-course-default-rtdb.firebaseio.com",
  projectId: "buff-course",
  storageBucket: "buff-course.appspot.com",
  messagingSenderId: "846974602967",
  appId: "1:846974602967:web:cc340a2576d3bf11156a92",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export async function addMyCourses(courses = []) {
  const coursesRef = ref(db, "mycourses");
  return set(coursesRef, courses);
}

export async function getMyCourses() {
  const coursesRef = ref(db, "mycourses");
  return get(coursesRef);
}

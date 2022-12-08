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

export async function addCourses(courses = []) {
  const coursesRef = ref(db, "courses");
  return set(coursesRef, courses);
}

export async function getCourses() {
  const coursesRef = ref(db, "courses");
  return get(coursesRef);
}

export async function getCourse(id) {
  const coursesRef = ref(db, "courses/"+id);
  return get(coursesRef);
}
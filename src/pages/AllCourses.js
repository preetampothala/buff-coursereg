import { useEffect, useState } from "react";
import CourseList from "../components/CourseList/CourseList";
import { getCourses } from "../services/Courses.service";
import { addCourses } from "../services/Courses.service";

const INITIAL_COURSES = [
    {
      id: 0,
      title: "React",
      description: "React is a JavaScript library for building user interfaces.",
      image: "https://source.unsplash.com/random/300x150/?web,frontend",
      instructor: "Sybill Trelawney",
      rating: 2.5,
      department: "ATLS",
      instruction_mode: "online",
      max_enrollment: 100,
      current_enrollment: 50,
      start_date: "2021-01-01",
      end_date: "2021-01-31",
      credit_hours: 3,
      complete_description: "This is a complete description of the course",
      instructor_description: "This is a description of the instructor",
      class_notes: "This is a description of the class notes",
      course_highlights: [
        "This is a description of the course highlights",
        "This is a description of the course highlights",
        "This is a description of the course highlights",
        "This is a description of the course highlights",
      ],
    },
    {
      id: 1,
      title: "Frontend Web Development",
      description:
        "React Native is a JavaScript library for building user interfaces.",
      image: "https://source.unsplash.com/random/300x150/?web,frontend",
      instructor: "Albus Dumbledore",
      rating: 4.8,
      department: "ATLS",
      instruction_mode: "online",
      max_enrollment: 100,
      current_enrollment: 50,
      start_date: "2021-01-01",
      end_date: "2021-01-31",
      credit_hours: 3,
      complete_description: "This is a complete description of the course",
      instructor_description: "This is a description of the instructor",
      class_notes: "This is a description of the class notes",
      course_highlights: [
        "This is a description of the course highlights",
        "This is a description of the course highlights",
        "This is a description of the course highlights",
        "This is a description of the course highlights",
      ],
    },
    {
      id: 2,
      title: "ATLS 5429 Swift",
      description:
        "React Native is a JavaScript library for building user interfaces.",
      image: "https://source.unsplash.com/random/300x150/?web,frontend",
      instructor: "Quirinus Quirrell",
      rating: 3.5,
      department: "ATLS",
      instruction_mode: "online",
      max_enrollment: 100,
      current_enrollment: 50,
      start_date: "2021-01-01",
      end_date: "2021-01-31",
      credit_hours: 3,
      complete_description: "This is a complete description of the course",
      instructor_description: "This is a description of the instructor",
      class_notes: "This is a description of the class notes",
      course_highlights: [
        "This is a description of the course highlights",
        "This is a description of the course highlights",
        "This is a description of the course highlights",
        "This is a description of the course highlights",
      ],
    },
    {
      id: 3,
      title: "DS 5346 Statistics",
      description:
        "React Native is a JavaScript library for building user interfaces.",
      image: "https://source.unsplash.com/random/300x150/?web,frontend",
      instructor: "Severus Snape",
      rating: 4,
      department: "Data Science",
      instruction_mode: "online",
      max_enrollment: 100,
      current_enrollment: 50,
      start_date: "2021-01-01",
      end_date: "2021-01-31",
      credit_hours: 3,
      complete_description: "This is a complete description of the course",
      instructor_description: "This is a description of the instructor",
      class_notes: "This is a description of the class notes",
      course_highlights: [
        "This is a description of the course highlights",
        "This is a description of the course highlights",
        "This is a description of the course highlights",
        "This is a description of the course highlights",
      ],
    },
    {
      id: 4,
      title: "DS 5120 Python Introduction",
      description:
        "React Native is a JavaScript library for building user interfaces.",
      image: "https://source.unsplash.com/random/300x150/?web,frontend",
      instructor: "Minerva McGonagall",
      rating: 5,
      department: "Data Science",
      instruction_mode: "online",
      max_enrollment: 100,
      current_enrollment: 50,
      start_date: "2021-01-01",
      end_date: "2021-01-31",
      credit_hours: 3,
      complete_description: "This is a complete description of the course",
      instructor_description: "This is a description of the instructor",
      class_notes: "This is a description of the class notes",
      course_highlights: [
        "This is a description of the course highlights",
        "This is a description of the course highlights",
        "This is a description of the course highlights",
        "This is a description of the course highlights",
      ],
    },
    {
      id: 5,
      title: "Machine Learning",
      description:
        "React Native is a JavaScript library for building user interfaces.",
      image: "https://source.unsplash.com/random/300x150/?web,frontend",
      instructor: "Horace Slughorn",
      rating: 4.5,
      instruction_mode: "online",
      max_enrollment: 100,
      current_enrollment: 50,
      start_date: "2021-01-01",
      end_date: "2021-01-31",
      credit_hours: 3,
      complete_description: "This is a complete description of the course",
      instructor_description: "This is a description of the instructor",
      class_notes: "This is a description of the class notes",
      course_highlights: [
        "This is a description of the course highlights",
        "This is a description of the course highlights",
        "This is a description of the course highlights",
        "This is a description of the course highlights",
      ],
    },
    {
      id: 6,
      title: "p5.js",
      description:
        "React Native is a JavaScript library for building user interfaces.",
      image: "https://source.unsplash.com/random/300x150/?web,frontend",
      instructor: "Dolores Umbridge",
      rating: 2.5,
      instruction_mode: "online",
      max_enrollment: 100,
      current_enrollment: 50,
      start_date: "2021-01-01",
      end_date: "2021-01-31",
      credit_hours: 3,
      complete_description: "This is a complete description of the course",
      instructor_description: "This is a description of the instructor",
      class_notes: "This is a description of the class notes",
      course_highlights: [
        "This is a description of the course highlights",
        "This is a description of the course highlights",
        "This is a description of the course highlights",
        "This is a description of the course highlights",
      ],
    },
];

const AllCourses = () => {
  const [courses, setCourses] = useState([])
  useEffect(()=>{
    getCourses().then((snapshot) => {
          const data = snapshot.val();
          if (data && data.length > 0) {
              setCourses(data)
          }
          else {
            addCourses(INITIAL_COURSES).then(() => {
              setCourses(INITIAL_COURSES)
            });
          }
      })
  },[])
  return <CourseList courses={courses}/>;
};
export default AllCourses;



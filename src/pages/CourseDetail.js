import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCourse } from "../services/Courses.service";
import Course from "../components/Course/Course";

const CourseDetail = () => {
  const [course, setCourse] = useState({})
  const params = useParams();
  const {courseId} = params
  useEffect(()=>{
    if(!courseId)
      return
    getCourse(courseId).then((snapshot) => {
      const data = snapshot.val();
      if (data) {
        setCourse(data)
      }
      else{
        setCourse({})
      }
  })
  },[courseId])

  if (!course){
    return <p>No Course found</p>
  }
  return (
   <Course course={course}/>
  );
};
export default CourseDetail;

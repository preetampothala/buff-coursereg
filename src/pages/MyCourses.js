import { Fragment, useEffect, useState } from "react";
import { getMyCourses } from "../services/MyCourses.service";
import MyCourseItem from "../components/MyCourseItem/MyCourseItem";

const MyCourses = () => {
  const [courses, setCourses] = useState([])
  useEffect(()=>{
    getMyCourses().then(snapshot=>{
      const data = snapshot.val()
      if (data && data.length>0){
        setCourses(data)
      }
      else{
        setCourses([])
      }
    })
  },[])
  return (
    <Fragment>
      {courses.map((item) => {
        return (
          <MyCourseItem
            id={item.id}
            key={item.id}
            title={item.title}
            instructor={item.instructor}
            rating={item.rating}
          />
        );
      })}
    </Fragment>
  );
};
export default MyCourses;

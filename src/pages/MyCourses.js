import { Fragment, useEffect, useState } from "react";
import { getMyCourses } from "../services/MyCourses.service";
import MyCourseItem from "../components/MyCourseItem/MyCourseItem";
import styles from "./MyCourses.module.css";

const MyCourses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    getMyCourses().then((snapshot) => {
      const data = snapshot.val();
      if (data && data.length > 0) {
        setCourses(data);
      } else {
        setCourses([]);
      }
    });
  }, []);
  return (
    <Fragment>
      <h1 className={styles.heading}>My Courses</h1>
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

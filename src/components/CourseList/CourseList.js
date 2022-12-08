import styles from "./CourseList.module.css";
import CourseItem from "../CourseItem/CourseItem";
import { Fragment, useEffect, useState } from "react";
import Filter from "../Filter/Filter";
import Search from "../Search/Search";
import { useHistory, useLocation } from "react-router-dom";

const CourseList = (props) => {
  const [departmentList, setDepartmentList] = useState([]);
  const history = useHistory();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const searchText = queryParams.get("search") || '';
  const filterParam = queryParams.get("department") || '';

  useEffect(() => {
    setDepartmentList([
      ...new Set(
        props.courses.map((course) => {
          return course.department;
        })
      ),
    ]);
  }, [props]);

  const searchCourses = (searchText) => {
    if (searchText) {
      history.push({
        pathname: location.pathname,
        search: `?search=${searchText}&department=${filterParam}`,
      });
    }
  };

  const filterCourses = (department) => {
    history.push({
      pathname: location.pathname,
      search: `?search=${searchText}&department=${department}`,
    });
  };

  const filteredCourses = props.courses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchText.toLowerCase())
  );


  return (
    <Fragment>
      <div className={styles["course-filter"]}>
        <Filter items={departmentList} onFilter={filterCourses} />
        <Search onSearch={searchCourses} />
      </div>
      <ul className={styles.list}>
        {filteredCourses.map((course) => {
          return (
            <CourseItem
              id={course.id}
              key={course.id}
              title={course.title}
              description={course.description}
              image={course.image}
              instructor={course.instructor}
              rating={course.rating}
            />
          );
        })}
      </ul>
    </Fragment>
  );
};
export default CourseList;

import { useRef } from "react";
import styles from "./Search.module.css";

function Search(props) {
  const searchRef = useRef();
  const searchHandler = (e) => {
    props.onSearch(searchRef.current.value);
  };
  return (
    <input
      className={styles.search}
      type="search"
      placeholder="Search Courses"
      ref={searchRef}
      onChange={searchHandler}
    />
  );
}
export default Search;

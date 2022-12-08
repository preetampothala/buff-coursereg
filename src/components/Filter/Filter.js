import { useRef } from "react";
import styles from "./Filter.module.css";
const Filter = (props) => {
  const filterRef = useRef()
  const changeHandler =()=>{
    props.onFilter(filterRef.current.value);
  }
  return (
      <select className={styles.filter} onChange={changeHandler} ref={filterRef}>
        <option disabled>Select Department</option>
        {
          props.items.map((item, index)=>{
            return <option value={item} key={index}>{item}</option>
          })
        }
      </select>
  );
};

export default Filter;

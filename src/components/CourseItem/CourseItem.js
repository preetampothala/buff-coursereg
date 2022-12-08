import { Link } from "react-router-dom";
import styles from "./CourseItem.module.css";

const CourseItem = (props) => {
  const description =
    props.description.length > 10
      ? props.description.slice(0, 50) + " ..."
      : props.description;

  return (
    <li className={styles.card}>
      <Link to={`/courses/${props.id}`}>
        <div className={styles.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={styles.itemcontent}>
          <h3 className={styles.text}>{props.title}</h3>
          <p className={styles.text}>{description}</p>
          <div className={styles.itembottom}>
            <p>{props.instructor}</p>
            <p className={styles.rating}>{props.rating}*</p>
          </div>
        </div>
      </Link>
    </li>
  );
};
export default CourseItem;

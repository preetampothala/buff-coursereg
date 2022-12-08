import { Fragment, useContext } from "react";
import CartContext from "../../store/cart-context";
import Button from "../../ui/Button";
import styles from "./Course.module.css";
const Course = (props) => {
  const cartCtx = useContext(CartContext);
  const addToCartHandler = () => {
    cartCtx.addItem({
      id: props.course.id,
      title: props.course.title,
      rating: props.course.rating,
      instructor: props.course.instructor,
    });
  };
  return (
    <Fragment>
      <div className={styles.course_detail_main}>
        <div className={styles.detailsmaincontent}>
          <div className={styles.top}>
            <div className={styles.topone}>
              <h2>{props.course.title}</h2>
              <Button type="button" onClick={addToCartHandler}>
                Add to Cart
              </Button>
            </div>
            <p>{props.course.description}</p>
          </div>
          <div className={styles.marginbot}>
            <p>Instruction Mode: In Person</p>
            <p>Maximum Enrollment: {props.course.max_enrollment}</p>
            <p>
              Seats Available:{" "}
              {props.course.max_enrollment - props.course.current_enrollment}
            </p>
            <p>Credit Hours: {props.course.credit_hours}</p>
          </div>
          <div>
            <h4>{props.course.instructor}</h4>
            <h4 className={styles.rating}>{props.course.rating}</h4>
          </div>
        </div>
      </div>
      <section className={styles.cdSections}>
        <article className={styles.articles}>
          <h3 className={styles.marginbot}>Course Description</h3>
          <p>{props.course.complete_description}</p>
        </article>
        <article className={styles.articles}>
          <h3 className={styles.marginbot}>Class Notes</h3>
          <p>{props.course.class_notes}</p>
        </article>
        <article className={styles.articles}>
          <h3 className={styles.marginbot}>Instructor</h3>
          <h4>{props.course.instructor}</h4>
          <p>{props.course.instructor_description}</p>
        </article>
      </section>
    </Fragment>
  );
};
export default Course;

import styles from "./MyCourseItem.module.css";


const MyCourseItem = (props) => {

  return (
    <section className={styles.section}>
      <article className={styles.article}>
        <div className={styles.topone}>
          <div>
            <h3>{props.title}</h3>
            <p>{props.instructor}</p>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>{props.rating}</p>
        </div>
      </article>
    </section>
  );
};
export default MyCourseItem;

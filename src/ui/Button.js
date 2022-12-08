import styles from "./Button.module.css";
const Button = (props) => {
  const styling = props.className + " " + styles.button;
  return (
    <button className={styling} onClick={props.onClick} type={props.button}>
      {props.children}
    </button>
  );
};
export default Button;

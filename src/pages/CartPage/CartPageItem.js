import { useContext } from "react";
import styles from "./CartPageItem.module.css";
import Button from "../../ui/Button";
import CartContext from "../../store/cart-context";


const CartPageItem = (props) => {
  const cartCtx = useContext(CartContext);

  const removeHandler = () => {
    cartCtx.removeItem(props.id)
  };

  return (
    <section className={styles.CartSection}>
      <article className={styles.article}>
        <div className={styles.topone}>
          <div>
            <h3>{props.title}</h3>
            <p>{props.instructor}</p>
          </div>
          <Button className={styles.removebutton} onClick={removeHandler}>
            Remove
          </Button>
        </div>
        <div className={styles.bottom}>
          <p>{props.rating}</p>
        </div>
      </article>
    </section>
  );
};
export default CartPageItem;

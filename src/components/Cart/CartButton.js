import { Fragment, useContext } from "react";
import CartIcon from "./CartIcon";
import styles from "./Cart.module.css";
import Button from "../../ui/Button";
import CartContext from "../../store/cart-context";

const CartButton = () => {
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  return (
    <Fragment>
      <Button className={styles.button}>
        <span className={styles.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={styles.cartcount}>{items.length}</span>
      </Button>
    </Fragment>
  );
};

export default CartButton;

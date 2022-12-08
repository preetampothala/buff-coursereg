import styles from "./CartPage.module.css";
import CartPageItem from "./CartPageItem";
import Button from "../../ui/Button";
import CartContext from "../../store/cart-context";
import { useContext } from "react";
import {addMyCourses, getMyCourses} from "../../services/MyCourses.service"

const CartPage = () => {
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const enrollCourses = ()=>{
    getMyCourses().then((snapshot)=>{
      let data = snapshot.val()
      if(data && data.length>0){
        data.push(...items)
      }
      else{
        data = items
      }
      addMyCourses(data).then((snapshot)=>{
        items.forEach(item=>{
          cartCtx.removeItem(item.id)
        })
      })
    })
    
  }
  return (
    <div className={styles.cartpage}>
      <h1 className={styles.title}>Cart</h1>
      {items.map((item) => {
        return (
          <CartPageItem
            id={item.id}
            key={item.id}
            title={item.title}
            instructor={item.instructor}
            rating={item.rating}
          />
        );
      })}
      <Button className={styles.enrollbutton} onClick={enrollCourses}>Enroll Courses</Button>
    </div>
  );
};
export default CartPage;

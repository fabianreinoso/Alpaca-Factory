import styles from "../UI/OderConfirm.module.css";
import happyCat from "../../assets/happyCat.jpg";

const OrderConfirm = () => {
  return (
    <>
      <div className={styles.container}>
        <div>
          <img src={happyCat} className={styles.catImg} alt="happyCat" />
        </div>
        <div className={styles.popup}>
          <h2>Your Order is complete!</h2>
          <p>You will be receiving a confirmation email with order details.</p>
        </div>
        <a className={styles.btnContainer} href="/">
          <button className={styles.ShoppingBtn}>Continue Shopping</button>
        </a>
      </div>
    </>
  );
};

export default OrderConfirm;

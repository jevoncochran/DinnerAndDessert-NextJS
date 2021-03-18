import styles from "./Checkout.module.scss";

const Method = (props) => {
  return (
    <div className={styles["checkout-method-div"]}>
      <h3 className={styles["checkout-div-label"]}>Method</h3>
      <input
        type="radio"
        id="pickup"
        name="order_method"
        value="pickup"
        className={styles["checkout-method-input"]}
        onClick={() => props.setDelivery(false)}
      />
      <label htmlFor="pickup" className={styles["checkout-amount-text"]}>
        Pickup
      </label>
      <br />
      <input
        type="radio"
        id="delivery"
        name="order_method"
        value="delivery"
        className={styles["checkout-method-input"]}
        onClick={() => props.setDelivery(true)}
      />
      <label htmlFor="female" className={styles["checkout-amount-text"]}>
        Delivery
      </label>
    </div>
  );
};

export default Method;

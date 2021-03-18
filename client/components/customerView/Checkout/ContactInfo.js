import styles from "./Checkout.module.scss";

const ContactInfo = (props) => {
  return (
    <div className={styles["checkout-cust-info-div"]}>
      <h3 className={styles["checkout-div-label"]}>Contact Info</h3>
      <div className={styles["checkout-name-and-phone"]}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className={
            styles["checkout-cust-info-input"] +
            " " +
            styles["checkout-amount-text"]
          }
          value={props.contact.name}
          onChange={props.handleContactChange}
        />
        <input
          type="text"
          name="phone_number"
          placeholder="Phone Number"
          value={props.contact.phone_number}
          onChange={props.handleContactChange}
          className={
            styles["checkout-cust-info-input"] +
            " " +
            styles["checkout-amount-text"]
          }
        />
      </div>
      <br />
      <input
        type="text"
        name="address"
        placeholder="Delivery address"
        value={props.contact.address}
        onChange={props.handleContactChange}
        className={
          styles["checkout-cust-info-input"] +
          " " +
          styles["checkout-amount-text"]
        }
      />
    </div>
  );
};

export default ContactInfo;

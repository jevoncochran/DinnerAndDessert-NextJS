import { useState } from "react";
import styles from "./Checkout.module.scss";
import CurrencyFormatter from "currencyformatter.js";
import { connect } from "react-redux";

const OrderSummary = (props) => {
  return (
    <div className={styles["checkout-order-summary-div"]}>
      <h3 className={styles["checkout-div-label"]}>Order Summary</h3>
      {props.order.map((item) => (
        <div key={item.id} className={styles["checkout-order-item-div"]}>
          <div className={styles["checkout-remove-icon"]}>
            <i
              class="fas fa-times-circle"
              style={{ width: "10%" }}
              onClick={() => props.removeFromOrder(item.id)}
            ></i>
          </div>
          <p className={styles["checkout-order-item-count"]}>
            <input
              className={styles["checkout-order-item-count-input"]}
              type="number"
              value={item.count}
              onChange={(e) =>
                props.updateCount(Number(e.target.value), item.id)
              }
            />
          </p>
          <p className={styles["checkout-order-item-name"]}>{item.item}</p>
          <p className={styles["checkout-order-item-total"]}>
            {CurrencyFormatter.format(item.total, { currency: "USD" })}
          </p>
        </div>
      ))}
      <label htmlFor="special-instr-input">Special instructions</label>
      <br />
      <input
        className={styles["checkout-order-note-input"]}
        type="text"
        id="special-instr-input"
      />
      <hr />
      <div className={styles["checkout-amount-div"]}>
        <p className={styles["checkout-amount-text"]}>Subtotal</p>
        <p className={styles["checkout-amount-text"]}>
          {CurrencyFormatter.format(props.orderSubtotal, { currency: "USD" })}
        </p>
      </div>
      <div className={styles["checkout-amount-div"]}>
        <p className={styles["checkout-amount-text"]}>Tax</p>
        <p className={styles["checkout-amount-text"]}>
          {CurrencyFormatter.format(props.orderSubtotal * 0.06, {
            currency: "USD",
          })}
        </p>
      </div>
      {props.delivery && (
        <div className={styles["checkout-amount-div"]}>
          <p className={styles["checkout-amount-text"]}>Delivery fee</p>
          <p className={styles["checkout-amount-text"]}>
            {CurrencyFormatter.format(5.0, { currency: "USD" })}
          </p>
        </div>
      )}
      <div className={styles["checkout-tip-div"]}>
        <p
          className={
            styles["checkout-tip-label"] + " " + styles["checkout-amount-text"]
          }
        >
          Add tip
        </p>
        <div className={styles["checkout-tip-calc-div"]}>
          <form className={styles["checkout-tip-amount-div"]}>
            <span className={styles["checkout-tip-radio-span"]}>
              <input
                type="radio"
                id="tip1"
                name="tip"
                value={0.05}
                className={styles["checkout-tip-radio"]}
                onClick={props.getSuggestedTip}
              />
              <label for="tip1">5%</label>
            </span>
            <span className={styles["checkout-tip-radio-span"]}>
              <input
                type="radio"
                id="tip2"
                name="tip"
                value={0.1}
                className={styles["checkout-tip-radio"]}
                onClick={props.getSuggestedTip}
              />
              <label for="tip2">10%</label>
            </span>
            <span className={styles["checkout-tip-radio-span"]}>
              <input
                type="radio"
                id="tip3"
                name="tip"
                value={0.15}
                className={styles["checkout-tip-radio"]}
                onClick={props.getSuggestedTip}
              />
              <label for="tip3">15%</label>
            </span>
            <span className={styles["checkout-tip-radio-span"]}>
              <input
                type="radio"
                id="custom-tip"
                name="tip"
                value={props.customTip}
                className={styles["checkout-tip-radio"]}
                onClick={props.getCustomTip}
              />
              {/* <label for="custom-tip" style={{ fontSize: '0.8rem'}}>other</label> */}
              <input
                type="number"
                value={props.customTip}
                min="0.50"
                step="0.50"
                onClick={props.handleCustTipClick}
                onChange={(e) => props.handleCustTipChange(e)}
                className={styles["checkout-custom-tip-input"]}
              />
            </span>
          </form>
          <div className={styles["tip-total-div"]}>
            <p>
              {CurrencyFormatter.format(props.tipVal.tip, {
                currency: "USD",
              })}
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className={styles["checkout-amount-div"]}>
        <p
          className={styles["checkout-amount-text"]}
          style={{ fontWeight: "bold" }}
        >
          Total
        </p>
        <p className={styles["checkout-amount-text"]}>
          {props.delivery
            ? CurrencyFormatter.format(
                props.orderSubtotal +
                  props.orderSubtotal * 0.06 +
                  Number(props.tipVal.tip) +
                  5,
                { currency: "USD" }
              )
            : CurrencyFormatter.format(
                props.orderSubtotal +
                  props.orderSubtotal * 0.06 +
                  Number(props.tipVal.tip),
                { currency: "USD" }
              )}
        </p>
      </div>
      <button
        className={styles["checkout-confirm-btn"]}
        onClick={props.prepForPayment}
      >
        Confirm Order
      </button>
      {/* <button onClick={onTestButtonClick}>Test Button</button> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    order: state.customer.order,
  };
};

export default connect(mapStateToProps, {})(OrderSummary);

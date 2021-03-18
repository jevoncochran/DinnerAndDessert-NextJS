import styles from "./OrderCard.module.scss";
import Link from "next/link";
import Card from "@material-ui/core/Card";
import { ClickAwayListener } from "@material-ui/core";
import { AiFillCloseSquare } from "react-icons/ai";
import { FaTimesCircle } from "react-icons/fa";
import CurrencyFormatter from "currencyformatter.js";
import { connect } from "react-redux";
import {
  closeOrderCard,
  removeFromOrder,
  updateCount,
} from "../../../redux/actions";

const OrderCard = (props) => {
  const orderCount = props.order.reduce(function (prev, cur) {
    return prev + cur.count;
  }, 0);

  return (
    <ClickAwayListener onClickAway={props.closeOrderCard}>
      <Card className={styles["order-card-main"]}>
        <div
          className={styles["order-card-close-icon"]}
          onClick={props.closeOrderCard}
        >
          <AiFillCloseSquare />
        </div>

        <h1 className={styles["order-card-title"]}>Your Order</h1>

        <div className={styles["order-items-cont"]}>
          {props.order.map((item) => (
            <div key={item.id} className={styles["order-item-div"]}>
              <div
                className={
                  styles["order-items-cont-txt"] +
                  " " +
                  styles["order-item-remove"]
                }
                onClick={() => props.removeFromOrder(item.id)}
              >
                <FaTimesCircle />
              </div>
              <p
                className={
                  styles["order-item-count"] +
                  " " +
                  styles["order-items-cont-txt"]
                }
              >
                <input
                  type="number"
                  value={item.count}
                  onChange={(e) =>
                    props.updateCount(Number(e.target.value), item.id)
                  }
                  className={styles["order-item-count-input"]}
                />
              </p>
              <p
                className={
                  styles["order-item-name"] +
                  " " +
                  styles["order-items-cont-txt"]
                }
              >
                {item.item}
              </p>
              <p
                className={
                  styles["order-item-total"] +
                  " " +
                  styles["order-items-cont-txt"]
                }
              >
                {CurrencyFormatter.format(item.total, { currency: "USD" })}
              </p>
              <hr />
            </div>
          ))}
        </div>

        <input
          className={styles["order-note-input"]}
          type="text"
          placeholder="Special instructions..."
        />
        <Link href="/checkout">
          <button
            className={styles["pay-button"]}
            // onClick={() => props.history.push("/checkout")}
          >
            <div className={styles["pay-btn-contents-container"]}>
              <p className={styles["total-items-count"]}>{orderCount}</p>
              <p className={styles["pay-btn-txt"]}>Next step: pay</p>
              <p className={styles["pay-btn-txt"]}>
                {CurrencyFormatter.format(
                  props.order.reduce(function (prev, cur) {
                    return prev + cur.total;
                  }, 0),
                  { currency: "USD" }
                )}
              </p>
            </div>
          </button>
        </Link>
      </Card>
    </ClickAwayListener>
  );
};

const mapStateToProps = (state) => {
  return {
    order: state.customer.order,
  };
};

export default connect(mapStateToProps, {
  closeOrderCard,
  removeFromOrder,
  updateCount,
})(OrderCard);

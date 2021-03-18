import { useState, useEffect } from "react";
import styles from "./MenuItemModal.module.scss";
import CurrencyFormatter from "currencyformatter.js";
import { AiFillCloseSquare } from "react-icons/ai";
import { IoIosAddCircle, IoIosRemoveCircle } from "react-icons/io";
import { connect } from "react-redux";
import {
  closeMenuItemModal,
  addItemToOrder,
  updateOrder,
  openOrderCard,
} from "../../../redux/actions";

const MenuItemModal = (props) => {
  // holds value for count of menu item
  const [count, setCount] = useState(1);

  // increases (menu item) count by 1
  const increment = () => {
    setCount(count + 1);
  };

  // decreases (menu item) count by 1
  const decrement = () => {
    if (count === 1) {
      setCount(1);
    } else {
      setCount(count - 1);
    }
  };

  // holds value for selected menu item to add to order
  const [itemToAdd, setItemToAdd] = useState({});

  const addToOrder = () => {
    // if item is already in order, an update is performed based on new specifications
    if (props.order.some((el) => itemToAdd.id === el.id)) {
      props.updateOrder(itemToAdd);
      // if item is not in order, it is added to order
    } else {
      props.addItemToOrder(itemToAdd);
    }
    props.openOrderCard();
    props.closeMenuItemModal();
    setCount(1);
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setItemToAdd({
      id: props.selectedMenuItem.id,
      item: props.selectedMenuItem.name,
      count: count,
      price: props.selectedMenuItem.price,
      total: props.selectedMenuItem.price * count,
    });
  }, [count]);

  return (
    <div className={styles["mim"]}>
      <div className={styles["mim-content"]}>
        <div
          className={styles["mim-img"]}
          style={{ backgroundImage: `url(${props.selectedMenuItem.image})` }}
        >
          <div
            className={styles["mim-close-icon"]}
            onClick={props.closeMenuItemModal}
          >
            <AiFillCloseSquare />
          </div>
        </div>
        <h1 className={styles["mim-item"]}>{props.selectedMenuItem.name}</h1>
        <div className={styles["mim-instructions-label"]}>
          Special instructions
        </div>
        <input
          type="text"
          name="instructions"
          placeholder="Leave a note for the kitchen"
          className={styles["mim-input"]}
        />
        <div className={styles["mim-btn-div"]}>
          <div className={styles["mim-count-div"]}>
            <div className={styles["mim-count-icon"]} onClick={increment}>
              <IoIosAddCircle />
            </div>
            <p>{count}</p>
            <div className={styles["mim-count-icon"]} onClick={decrement}>
              <IoIosRemoveCircle />
            </div>
          </div>
          <button className={styles["mim-submit-btn"]} onClick={addToOrder}>
            Add {count} to Order{" "}
            {CurrencyFormatter.format(props.selectedMenuItem.price * count, {
              currency: "USD",
            })}
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedMenuItem: state.customer.selectedMenuItem,
    order: state.customer.order,
  };
};

export default connect(mapStateToProps, {
  closeMenuItemModal,
  addItemToOrder,
  updateOrder,
  openOrderCard,
})(MenuItemModal);

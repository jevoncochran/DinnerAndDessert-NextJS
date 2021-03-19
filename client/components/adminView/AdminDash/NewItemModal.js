import { useState } from "react";
import styles from "./AdminDash.module.scss";
import { ClickAwayListener } from "@material-ui/core";
import { connect } from "react-redux";
import { addMenuItem, indicateMenuChange } from "../../../redux/actions";

const NewItemModal = (props) => {
  const [newItem, setNewItem] = useState({
    item: "",
    price: "",
    category: props.newItemCategory,
  });

  const handleChanges = (e) => {
    setNewItem({
      ...newItem,
      [e.target.name]: e.target.value,
    });
  };

  const addToMenuAndClose = (e) => {
    e.preventDefault();
    props.addMenuItem(newItem);
    props.closeModal();
    props.indicateMenuChange();
  };

  return (
    <div className={styles["ad-new-item-modal"]}>
      <ClickAwayListener onClickAway={props.closeModal}>
        <div className={styles["ad-new-item-modal-content"]}>
          <h1 className={styles["ad-new-item-modal-headline"]}>
            New Menu Item
          </h1>
          <form onSubmit={addToMenuAndClose}>
            <div className={styles["ad-new-item-modal-text-input-div"]}>
              <div className={styles["ad-new-item-modal-input-cont"]}>
                <label htmlFor="item">Item</label>
                <input
                  className={styles["login-cred-input"]}
                  type="text"
                  name="item"
                  onChange={handleChanges}
                />
              </div>
              <div className={styles["ad-new-item-modal-input-cont"]}>
                <label htmlFor="price">Price</label>
                <input
                  className={styles["login-cred-input"]}
                  type="number"
                  name="price"
                  onChange={handleChanges}
                />
              </div>
            </div>
            {/* <div className={styles["ad-new-item-modal-dd-div"]}>
              <div className={styles["ad-new-item-modal-radio-div"]}>
                <input
                  type="radio"
                  id="dinner"
                  name="dinner_or_dessert"
                  value="dinner"
                  className={styles["ad-new-item-modal-radio"]}
                  onClick={handleChanges}
                />
                <label
                  htmlFor="dinner"
                  className={styles["ad-new-item-modal-radio-label"]}
                >
                  Dinner
                </label>
              </div>
              <div className={styles["ad-new-item-modal-radio-div"]}>
                <input
                  type="radio"
                  id="dessert"
                  name="dinner_or_dessert"
                  value="dessert"
                  className={styles["ad-new-item-modal-radio"]}
                  onClick={handleChanges}
                />
                <label
                  htmlFor="dessert"
                  className={styles["ad-new-item-modal-radio-label"]}
                >
                  Dessert
                </label>
              </div>
            </div>
            <br />
            <div className={styles["ad-new-item-modal-dd-div"]}>
              <div className={styles["ad-new-item-modal-radio-div"]}>
                <input
                  type="radio"
                  id="entree"
                  name="category"
                  value="entree"
                  className={styles["ad-new-item-modal-radio"]}
                  onClick={handleChanges}
                />
                <label
                  htmlFor="entree"
                  className={styles["ad-new-item-modal-radio-label"]}
                >
                  Entree
                </label>
              </div>
              <div className={styles["ad-new-item-modal-radio-div"]}>
                <input
                  type="radio"
                  id="side"
                  name="category"
                  value="side"
                  className={styles["ad-new-item-modal-radio"]}
                  onClick={handleChanges}
                />
                <label
                  htmlFor="side"
                  className={styles["ad-new-item-modal-radio-label"]}
                >
                  Side
                </label>
              </div>
            </div> */}
            <button>Submit</button>
          </form>
        </div>
      </ClickAwayListener>
    </div>
  );
};

export default connect(null, { addMenuItem, indicateMenuChange })(NewItemModal);

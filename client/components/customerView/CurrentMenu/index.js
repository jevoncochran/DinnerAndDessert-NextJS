import { useEffect, useState } from "react";
import styles from "./CurrentMenu.module.scss";
import MenuSection from "../MenuSection";
import MenuItemModal from "../MenuItemModal";
import OrderCard from "../OrderCard";
import axios from "axios";
import { connect } from "react-redux";

const CurrentMenu = (props) => {
  const [menu, setMenu] = useState({
    entrees: [],
    sides: [],
    dessert: [],
    extras: [],
  });

  //   // determines whether or not MenuItemModal component is open
  //   const [openMode, setOpenMode] = useState(false);

  //   // sets modalOpen to true, thus openinng the menu item modal
  //   const openModal = () => {
  //     setOpenMode(true);
  //   };

  // sets modalOpen to false, thus closing the menu item modal
  const closeModal = () => {
    setOpenMode(false);
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/menu/current")
      .then((res) => {
        // console.log(res);
        setMenu({
          entrees: res.data.filter((item) => item.category === "entree"),
          sides: res.data.filter((item) => item.category === "side"),
          extras: res.data.filter((item) => item.category === "extra"),
          dessert: res.data.filter((item) => item.category === "dessert"),
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className={styles["cur-menu"]}>
      <h1 className={styles["cur-menu-header"]}>Today's Menu</h1>
      {menu.entrees.length > 0 && (
        <MenuSection section="Entrees" array={menu.entrees} />
      )}
      {menu.sides.length > 0 && (
        <MenuSection section="Sides" array={menu.sides} />
      )}
      {menu.dessert.length > 0 && (
        <MenuSection section="Dessert" array={menu.dessert} />
      )}
      {props.isMenuItemModalOpen && <MenuItemModal />}
      {props.isOrderCardOpen && <OrderCard />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isMenuItemModalOpen: state.customer.isMenuItemModalOpen,
    isOrderCardOpen: state.customer.isOrderCardOpen,
  };
};

export default connect(mapStateToProps, {})(CurrentMenu);

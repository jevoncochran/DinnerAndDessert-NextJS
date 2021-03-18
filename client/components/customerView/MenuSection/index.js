import { useState } from "react";
import styles from "./MenuSection.module.scss";
import MenuItemCard from "../MenuItemCard";
import MenuItemModal from "../MenuItemModal";
import Grid from "@material-ui/core/Grid";

const MenuSection = (props) => {
  // user clicks on card for particular menu item
  // that menu item is captured in state
  // menu item state used to show that menu item when MenuItemModal is opened
  const [menuItem, setMenuItem] = useState({
    id: "",
    name: "",
    description: "",
    image: "",
    price: "",
  });

  return (
    <div className="menu-section">
      <h3 className="menu-section-label">{props.section}</h3>
      <Grid container spacing={2}>
        {props.array.map((item) => (
          <MenuItemCard item={item} />
        ))}
      </Grid>
      {/* {openMode && (
        <MenuItemModal
          openMode={openMode}
          closeModal={closeModal}
          menuItem={menuItem}
        />
      )} */}
    </div>
  );
};

export default MenuSection;

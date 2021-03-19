import styles from "./AdminDash.module.scss";
import { RiAddBoxFill } from "react-icons/ri";
import Grid from "@material-ui/core/Grid";
import MenuItemCard from "./MenuItemCard";

const MenuCategorySection = (props) => {
  return (
    <div className={styles["ad-menu-category-section"]}>
      {props.categoryArray.length > 0 && (
        <div className={styles["cur-menu-category-container"]}>
          <div className={styles["ad-menu-category-label-div"]}>
            <h3 className={styles["ad-menu-label"]}>{props.title}</h3>
            <div
              className={styles["ad-menu-category-add-icon"]}
              onClick={() => props.openModal(props.category)}
            >
              <RiAddBoxFill />
            </div>
          </div>
          <Grid container spacing={2}>
            {props.categoryArray.map((item) => (
              <MenuItemCard
                item={item}
                inputClick={props.inputClick}
                editDayAvailability={props.editDayAvailability}
              />
            ))}
          </Grid>
        </div>
      )}
    </div>
  );
};

export default MenuCategorySection;

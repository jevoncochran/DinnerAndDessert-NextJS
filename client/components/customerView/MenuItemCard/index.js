import styles from "./MenuItemCard.module.scss";
import CurrencyFormatter from "currencyformatter.js";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import { connect } from "react-redux";
import { setMenuItem, openMenuItemModal } from "../../../redux/actions";

const MenuItemCard = (props) => {
  return (
    <Grid
      item
      xs={3}
      onClick={() => {
        props.setMenuItem({
          id: props.item.id,
          name: props.item.item,
          description: props.item.description,
          image: props.item.image,
          price: props.item.price,
        });
      }}
    >
      <Card className={styles["mi-card"]} onClick={props.openMenuItemModal}>
        <div className={styles["mi-card-deets-cont"]}>
          <p className={styles["mi-card-item"]}>{props.item.item}</p>
          <p className={styles["mi-card-description"]}>
            {props.item.description}
          </p>
          <p className={styles["mi-card-price"]}>
            {CurrencyFormatter.format(props.item.price, {
              currency: "USD",
            })}
          </p>
        </div>
        <div className={styles["mi-card-img"]}>
          <object
            data={props.item.image}
            alt="pic of menu item"
            aria-label="menu item image"
          />
        </div>
      </Card>
    </Grid>
  );
};

export default connect(null, { setMenuItem, openMenuItemModal })(MenuItemCard);

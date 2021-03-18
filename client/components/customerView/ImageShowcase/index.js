import styles from "./ImageShowcase.module.scss";
import dessert from "../../../public/assets/images/dessert.jpg";
import jerkChicken from "../../../public/assets/images/jerk-chicken.jpg";
import lambChopDinner from "../../../public/assets/images/lamb-chop-dinner.jpg";
import macAndCheese from "../../../public/assets/images/mac-and-cheese.jpg";

const ImageShowcase = () => {
  return (
    <div className={styles["img-showcase-container"]}>
      <div className={styles["img-showcase-img-container"]}>
        <img
          src={macAndCheese}
          alt="food"
          className={styles["img-showcase-img"]}
        />
        <p className={styles["img-showcase-img-txt"]}>
          And on the eighth day, God made mac and cheese and blessed us with the
          recipe...
        </p>
      </div>
      <div className={styles["img-showcase-img-container"]}>
        <img
          src={lambChopDinner}
          alt="food"
          className={styles["img-showcase-img"]}
        />
        <p className={styles["img-showcase-img-txt"]}>
          No one does lamb chops like Dinner and Dessert!!!
        </p>
      </div>
      <div className={styles["img-showcase-img-container"]}>
        <img src={dessert} alt="food" className={styles["img-showcase-img"]} />
        <p className={styles["img-showcase-img-txt"]}>
          We dare you to try our desserts and *not* get addicted...
        </p>
      </div>
      <div className={styles["img-showcase-img-container"]}>
        <img
          src={jerkChicken}
          alt="food"
          className={styles["img-showcase-img"]}
        />
        <p className={styles["img-showcase-img-txt"]}>
          The best bbq jerk chicken in the D!!!
        </p>
      </div>
    </div>
  );
};

export default ImageShowcase;

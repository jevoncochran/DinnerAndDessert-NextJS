import styles from "./HomeImage.module.scss";

const HomeImage = () => {
  return (
    <div>
      <div
        className={styles.image}
        style={{
          backgroundImage:
            "url(https://thejewishkitchen.com/wp-content/uploads/2016/06/lamb-chops4.jpg)",
        }}
      ></div>
    </div>
  );
};

export default HomeImage;

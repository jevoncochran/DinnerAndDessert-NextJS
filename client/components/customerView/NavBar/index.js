import styles from "./NavBar.module.scss";
import logo from "../../../public/assets/images/dd-logo.jpeg";
import { FaFacebook, FaInstagram, FaShoppingBasket } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Link from "next/link";

const NavBar = (props) => {
  return (
    <div className={styles.navbar}>
      <img
        src={logo}
        alt="Dinner and Dessert logo"
        className={styles["nav-logo"]}
      />
      <div className={styles["nav-link-container"]}>
        <Link href="/">
          <p className={styles["nav-link"]}>Home</p>
        </Link>
        <Link href="/menus">
          <p className={styles["nav-link"]}>Menus</p>
        </Link>
        <Link href="/contact">
          <p className={styles["nav-link"]}>Contact</p>
        </Link>
      </div>
      <div className={styles["nav-social-container"]}>
        <a
          href="https://www.instagram.com/dinneranddessertllc/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles["nav-social-link"]}
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/kendra.carpenter.7503"
          target="_blank"
          rel="noopener noreferrer"
          className={styles["nav-social-link"]}
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles["nav-social-link"]}
        >
          <HiOutlineMail />
        </a>
      </div>
      {/* {props.order.length > 0 && (
        <div className="nav-order-icon" onClick={props.openOrderCard}>
          <FaShoppingBasket />
        </div>
      )} */}
    </div>
  );
};

export default NavBar;

// Admin Dashboard component
import { useState, useEffect } from "react";
import styles from "./AdminDash.module.scss";
// import { w3cwebsocket as W3CWebSocket } from "websocket";
import NewItemModal from "./NewItemModal";
import MenuCategorySection from "./MenuCategorySection";
import { getAllMenuItems } from "./functions/getAllMenuItems.js";
import { changeItemPic } from "./functions/changeItemPic";
import axios from "axios";
import { indicateMenuChange } from "../../../redux/actions";
import { connect } from "react-redux";
import { useRouter } from "next/router";

// const client = new W3CWebSocket("ws://127.0.0.1:8000");

const AdminDash = (props) => {
  const router = useRouter();

  const [menu, setMenu] = useState({
    entrees: [],
    sides: [],
    dessert: [],
  });

  const [newItemImage, setNewItemImage] = useState(null);

  const [imageToChange, setImageToChange] = useState(null);

  const [showModal, setShowModal] = useState(false);

  const [newItemCategory, setNewItemCategory] = useState("");

  const openModal = (modalCategory) => {
    setShowModal(true);
    setNewItemCategory(modalCategory);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setNewItemImage(e.target.files[0]);
    }
  };

  const editDayAvailability = (newStatus, itemId) => {
    axios
      .patch(`http://localhost:5000/api/menu/item${itemId}`, newStatus)
      .then(() => {
        getAllMenuItems().then((res) => {
          setMenu({
            entrees: res.entrees,
            sides: res.sides,
            dessert: res.dessert,
          });
        });
      });
  };

  let inputFile = "";
  const inputClick = (imageId) => {
    setImageToChange(imageId);
    inputFile.click();
  };

  useEffect(() => {
    if (newItemImage) {
      changeItemPic(newItemImage, imageToChange, props.indicateMenuChange);
    }
  }, [newItemImage, imageToChange]);

  useEffect(() => {
    console.log("useEffect dependent on menuChangeToggler ran");
    getAllMenuItems().then((res) => {
      setMenu({
        entrees: res.entrees,
        sides: res.sides,
        dessert: res.dessert,
      });
    });
  }, [props.menuChangeToggler]);

  //   useEffect(() => {
  //     client.onopen = () => {
  //       console.log("WebSocket Client connected");
  //     };

  //     client.onmessage = (message) => {
  //       const dataFromServer = JSON.parse(message.data);
  //       console.log("got order! ", dataFromServer);
  //     };
  //   });

  return (
    <div className={styles.ad}>
      <h1 className={styles["ad-headline"]}>Admin Dashboard</h1>
      <button onClick={() => router.push("/admin/orders")}>
        Go To Orders
      </button>
      <h2 style={{ textAlign: "center" }}>Menu Options</h2>
      <MenuCategorySection
        title="Entrees"
        category="entree"
        openModal={openModal}
        categoryArray={menu.entrees}
        editDayAvailability={editDayAvailability}
        inputClick={inputClick}
      />

      <MenuCategorySection
        title="Sides"
        category="side"
        openModal={openModal}
        categoryArray={menu.sides}
        editDayAvailability={editDayAvailability}
        inputClick={inputClick}
      />

      <MenuCategorySection
        title="Dessert"
        category="dessert"
        openModal={openModal}
        categoryArray={menu.dessert}
        editDayAvailability={editDayAvailability}
        inputClick={inputClick}
      />

      <input
        className={styles["ad-change-image-input"]}
        type="file"
        id="menu-item-img-file"
        name="menu-item-img-file"
        placeholder="test"
        onChange={handleFileChange}
        ref={(input) => (inputFile = input)}
      />

      {showModal && (
        <NewItemModal
          openModal={openModal}
          closeModal={closeModal}
          newItemCategory={newItemCategory}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    menuChangeToggler: state.admin.menuChangeToggler,
  };
};

export default connect(mapStateToProps, { indicateMenuChange })(AdminDash);

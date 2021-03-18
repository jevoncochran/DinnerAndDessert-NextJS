import { useState } from "react";
import styles from "./Inquiry.module.scss";
import emailjs from "emailjs-com";
import { FaGripLines } from "react-icons/fa";

const Inquiry = () => {
  const [inquiry, setInquiry] = useState({
    name: "",
    email: "",
    phone_number: "",
    contents: "",
    date: "",
  });

  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (e) => {
    let column = e.target.name;
    setInquiry({
      ...inquiry,
      [column]: e.target.value,
    });
  };

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    if (!inquiry.email && !inquiry.phone_number) {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 4000);
    } else {
      e.preventDefault();

      emailjs
        .sendForm(
          "service_cv3upmr",
          "template_85bjdlq",
          e.target,
          "user_gcST2H5scnEqWsdWxVu4s"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      e.target.reset();
    }
  };

  return (
    <div className={styles["inq"]}>
      <h1 className={styles["inq-headline"]}>At Your Service</h1>
      <h3 className={styles["inq-sub"]}>Dinneranddessert@yahoo.com</h3>
      <div className={styles["inq-grip-line"]}>
        <FaGripLines />
      </div>
      <p className={styles["inq-sub"] + " " + styles["inq-pitch"]}>
        Tell me a little about your event so I can begin the creation process
      </p>
      {showAlert && (
        <p className={styles["inq-alert"]}>
          Please provide email or phone number
        </p>
      )}
      <form className={styles["inq-form"]} onSubmit={handleInquirySubmit}>
        <div className={styles["inq-input-div"]}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            className={styles["inq-input"]}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles["inq-input-div"]}>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            className={styles["inq-input"]}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles["inq-input-div"]}>
          <label htmlFor="phone_number">Phone Number:</label>
          <input
            type="text"
            name="phone_number"
            className={styles["inq-input"]}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles["inq-input-div"]}>
          <label htmlFor="contents">Message:</label>
          <input
            type="text"
            name="contents"
            className={styles["inq-input"] + " " + styles["inq-msg-input"]}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className={styles["inq-submit-btn"]}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Inquiry;

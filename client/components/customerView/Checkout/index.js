import styles from "./Checkout.module.scss";
import { useState, useEffect } from "react";
import CurrencyFormatter from "currencyformatter.js";
import { connect } from "react-redux";
import Layout from "../Layout";
import ContactInfo from "./ContactInfo";
import Method from "./Method";
import OrderSummary from "./OrderSummary";
import { useRouter } from "next/router";
// import { w3cwebsocket as W3CWebSocket } from "websocket";

import {
  removeFromOrder,
  updateCount,
  addOrder,
  prepareOrder,
} from "../../../redux/actions";

// const client = new W3CWebSocket("ws://127.0.0.1:8000");

const Checkout = (props) => {
  const router = useRouter();

  // holds value for custom tip only when user types into custom input in tip div
  const [customTip, setCustomTip] = useState(null);

  // order subtotal derived from sum of (each item x item count)
  const orderSubtotal = props.order.reduce(function (prev, cur) {
    return prev + cur.total;
  }, 0);

  // tip percentage and tip amount
  const [tipVal, setTipVal] = useState({
    tipPerc: 0,
    tip: 0,
  });

  const [delivery, setDelivery] = useState(false);

  const [method, setMethod] = useState("pickup");

  const [contact, setContact] = useState({
    name: "",
    address: "",
    phone_number: "",
  });

  //   const [total, setTotal] = useState(delivery ? (orderSubtotal + tipVal.tip + (orderSubtotal * 0.06) + 5) : (orderSubtotal + tipVal.tip + (orderSubtotal * 0.06)));

  // calculates tip from user input in tip div
  // triggered by onclick on custom radio button
  const getCustomTip = () => {
    let custTipRad = document.getElementById("custom-tip");

    setTipVal({
      tip: custTipRad.value,
      tipPerc: null,
    });
  };

  // calculates tip from percentage radio buttons in tip div
  // triggered by onclick on percentage radio buttons
  const getSuggestedTip = () => {
    let tipRadios = document.getElementsByName("tip");

    tipRadios.forEach((ele) => {
      if (ele.checked) {
        setTipVal({
          tipPerc: ele.value,
          tip: orderSubtotal * ele.value,
        });
      }
    });
  };

  const handleCustTipClick = () => {
    let custTipRad = document.getElementById("custom-tip");
    custTipRad.clicked = true;
  };

  // updates tip amount per value user types into input in tip div
  const handleCustTipChange = (e) => {
    let custTipRad = document.getElementById("custom-tip");
    custTipRad.clicked = true;
    let tipRadios = document.getElementsByName("tip");
    tipRadios.forEach((ele) => {
      ele.checked = false;
    });

    // let custTipFormatted = CurrencyFormatter.format(e.target.value, { currency: 'USD' });
    setCustomTip(e.target.value);
    setTipVal({
      tip: e.target.value,
      tipPerc: null,
    });
  };

  const handleContactChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const generateDate = () => {
    let d = new Date();

    var month = (1 + d.getMonth()).toString();
    month = month.length > 1 ? month : "0" + month;

    var day = d.getDate().toString();
    day = day.length > 1 ? day : "0" + day;

    var year = d.getFullYear();

    return month + "/" + day + "/" + year;
  };

  const prepForPayment = () => {
    props.prepareOrder({
      customer: contact.name,
      date: generateDate(),
      method: method,
      subtotal: orderSubtotal,
      tip: tipVal.tip,
      tax: orderSubtotal * 0.06,
      total: delivery
        ? (orderSubtotal + tipVal.tip + orderSubtotal * 0.06 + 5).toFixed(2)
        : (orderSubtotal + tipVal.tip + orderSubtotal * 0.06).toFixed(2),
      address: contact.address,
      phone_number: contact.phone_number,
    });
    router.push("/pay");
  };

  useEffect(() => {
    if (delivery) {
      setMethod("delivery");
    } else {
      setMethod("pickup");
    }
  }, [delivery]);

  // useEffect(() => {
  //   client.onopen = () => {
  //     console.log("customer connected to web socket");
  //   };
  // });

  // const onTestButtonClick = () => {
  //   client.send(
  //     JSON.stringify({
  //       type: "message",
  //       msg: "order received",
  //     })
  //   );
  // };

  useEffect(() => {
    console.log("tipVal: ", tipVal);
    console.log("customTip: ", customTip);
  }, [tipVal, customTip]);

  return (
    <Layout>
      <div>
        <div className={styles["checkout"]}>
          <h1 className={styles["checkout-headline"]}>Checkout</h1>
          <div className={styles["checkout-main-container"]}>
            <div className={styles["checkout-sub-container"]}>
              <ContactInfo
                contact={contact}
                handleContactChange={handleContactChange}
              />
              <Method setDelivery={setDelivery} />
            </div>
            <div className={styles["checkout-sub-container"]}>
              <OrderSummary
                orderSubtotal={orderSubtotal}
                delivery={delivery}
                prepForPayment={prepForPayment}
                tipVal={tipVal}
                setTipVal={setTipVal}
                getSuggestedTip={getSuggestedTip}
                getCustomTip={getCustomTip}
                handleCustTipClick={handleCustTipClick}
                handleCustTipChange={handleCustTipChange}
                customTip={customTip}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    order: state.customer.order,
  };
};

export default connect(mapStateToProps, {
  removeFromOrder,
  updateCount,
  addOrder,
  prepareOrder,
})(Checkout);

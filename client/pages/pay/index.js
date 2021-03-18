import dynamic from "next/dynamic";

const PayPal = dynamic(() => import("../../components/customerView/PayPal"), {
  ssr: false,
});

const Payment = () => {
  return <PayPal />;
};

export default Payment;

import { io } from "socket.io-client";

const socket = io.connect("http://localhost:5000");

const OrderStatus = () => {
  return (
    <div>
      <alert>Your order has been placed!</alert>
    </div>
  );
};

export default OrderStatus;

import React from "react";

export const StartNewOrderBtn = ({ resetCart }) => {
  return (
    <button className="startNewOrderBtn" onClick={resetCart}>
      Start New Order
    </button>
  );
};

export default StartNewOrderBtn;

import React from "react";

export const StartNewOrderBtn = ({ closeModal }) => {
  return (
    <button className="startNewOrderBtn" onClick={closeModal}>
      Start New Order
    </button>
  );
};

export default StartNewOrderBtn;

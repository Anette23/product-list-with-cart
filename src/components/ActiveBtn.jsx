import React from "react";
import minus from '../../public/assets/images/icon-decrement-quantity.svg'
import plus from '../../public/assets/images/icon-increment-quantity.svg'
const ActiveBtn = ({addToCart, product, decreaseCount}) => {
 

  return (
    <div className="activeBtn">
      <button className="decreaseBtn" onClick={() => decreaseCount(product)}>
        <img src={minus} alt="decrement icon" />
      </button>
      <p className="count">{product.count}</p>
      <button className="increaseBtn" onClick={() => addToCart(product)}>
        <img src={plus} alt="increment icon" />
      </button>
    </div>
  );
};

export default ActiveBtn;

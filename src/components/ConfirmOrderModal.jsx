import React from "react";
import orderConfirmed from "../../public/assets/images/icon-order-confirmed.svg";
import StartNewOrderBtn from "./StartNewOrderBtn";

const ConfirmOrderModal = ({ cart }) => {
  return (
    <article>
      <header>
        <img src={orderConfirmed} alt="succes icon" />
        <h1>Order Confirmed</h1>
        <p>We hope you enjoy your food!</p>
      </header>
      <main>
        {cart.map((product) => (
          <>
            <div key={product.id}>
              <div className="left">
                <img src={product.image.thumbnail} alt={product.image.name} />{" "}
                <h4>{product.name}</h4>
                <p className="count">{product.count}x</p>
                <p className="price">@ ${product.price}</p>
              </div>
              <div className="right">
                <p className="total">{itemTotal}</p>
              </div>
            </div>
            <div className="orderTotal">
              <p>Order Total</p>
              <span>${totalPrice}</span>
            </div>
          </>
        ))}
      </main>
      <footer>
        <StartNewOrderBtn />
      </footer>
    </article>
  );
};

export default ConfirmOrderModal;

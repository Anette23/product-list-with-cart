import React, { useState } from "react";
import emptyCart from "../../public/assets/images/illustration-empty-cart.svg";
import removeIcon from "../../public/assets/images/icon-remove-item.svg";
import carbonNeutral from "../../public/assets/images/icon-carbon-neutral.svg";
import ConfirmOrderBtn from "./ConfirmOrderBtn";
import ConfirmOrderModal from "./ConfirmOrderModal";
const Cart = ({ cart, deleteProduct }) => {
  const productCount = cart.reduce((acc, product) => acc + product.count, 0);

  const totalPrice = cart.reduce(
    (acc, product) => acc + product.price * product.count,
    0
  );

  const formattedTotalPrice = totalPrice.toFixed(2);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }
  return (
    <section className="cart">
      <h2>Your Cart ({productCount})</h2>
      {cart.length === 0 ? (
        <article>
          <img src={emptyCart} alt="empty cart" />
          <p>Your added items will appear here</p>
        </article>
      ) : (
        <article>
          {cart.map((product) => {
            const itemTotal = product.price * product.count;
            return (
              <div key={product.id} className="activeCart">
                <h4>{product.name}</h4>
                <div className="activeCartData">
                  <div className="activeCartLeft">
                    <p className="count">{product.count}x</p>
                    <p className="price">@ ${product.price.toFixed(2)}</p>
                    <p className="total">${itemTotal.toFixed(2)}</p>
                  </div>
                  <div>
                    <button
                      className="deleteBtn"
                      onClick={() => deleteProduct(product.id, product.name)}
                    >
                      <img src={removeIcon} alt="delete product button" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="orderTotal">
            <p>Order Total</p>
            <span>${formattedTotalPrice}</span>
          </div>

          <div className="carbonNeutral">
            <img src={carbonNeutral} alt="tree" />
            <p>
              This is a <span>carbon-neutral</span> delivery
            </p>
          </div>
          <ConfirmOrderBtn openModal={openModal}/>
          <ConfirmOrderModal isModalOpen={isModalOpen} closeModal={closeModal}/>
        </article>
      )}
    </section>
  );
};

export default Cart;

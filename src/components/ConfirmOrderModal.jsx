import orderConfirmed from "../../public/assets/images/icon-order-confirmed.svg";
import StartNewOrderBtn from "./StartNewOrderBtn";
import "./ConfirmOrderModal.css";

const ConfirmOrderModal = ({ cart, isModalOpen, closeModal, resetCart}) => {
  const totalPrice = cart.reduce(
    (acc, product) => acc + product.price * product.count,
    0
  );

  const formattedTotalPrice = totalPrice.toFixed(2);

  return (
    <>
      {isModalOpen && (
        <>
          <div className="overlay" onClick={closeModal}></div>
          <dialog open={isModalOpen} className="modal">
            <header>
              <img src={orderConfirmed} alt="success icon" />
              <h1>Order Confirmed</h1>
              <p>We hope you enjoy your food!</p>
            </header>
            <main>
              {cart.map((product) => {
                const itemTotal = product.price * product.count;
                return (
                  <div key={product.id}>
                    <article className="modal-item">
                      <div className="left">
                        <div>
                          <img
                            src={product.image.thumbnail}
                            alt={product.image.name}
                          />
                        </div>
                        <div>
                          <div>
                            <h4>{product.name}</h4>
                          </div>
                          <div className="modal-count">
                            <p className="count">{product.count}x</p>
                            <p className="price">@ ${product.price.toFixed(2)}</p>
                          </div>
                        </div>
                      </div>
                      <div className="right">
                        <p className="total">${itemTotal.toFixed(2)}</p>
                      </div>
                    </article>
                  </div>
                );
              })}
              <div className="orderTotal">
                <p>Order Total</p>
                <span>${formattedTotalPrice}</span>
              </div>
            </main>
            <footer>
              <StartNewOrderBtn resetCart={resetCart} />
            </footer>
          </dialog>
        </>
      )}
    </>
  );
};

export default ConfirmOrderModal;

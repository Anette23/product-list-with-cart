import data from "../data.json";
import AddToCartBtn from "./AddToCartBtn";
import ActiveBtn from "./ActiveBtn";

const ProductCard = ({
  addToCart,
  decreaseCount,
  cart,
  activeCards,
  toggleActive,
}) => {
  return (
    <section className="productCard">
      {data.map((product) => {
        const count = cart.reduce((acc, cartProduct) => {
          return cartProduct.id === product.id ? acc + cartProduct.count : acc;
        }, 0);

        return (
          <article key={product.id}>
            <picture>
              <source
                media="(min-width: 1024px)"
                srcSet={product.image.desktop}
              />
              <source
                media="(min-width: 768px)"
                srcSet={product.image.tablet}
              />
              <img
                src={product.image.mobile}
                alt={product.name}
                className={
                  activeCards.includes(product.id) ? "activeImage" : ""
                }
              />
            </picture>
            <div className="cardBtn">
              {activeCards.includes(product.id) ? (
                <ActiveBtn
                  addToCart={addToCart}
                  product={{ ...product, count }}
                  decreaseCount={decreaseCount}
                />
              ) : (
                <AddToCartBtn onClick={() => toggleActive(product.id)} />
              )}
            </div>
            <small>{product.category}</small>
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
          </article>
        );
      })}
    </section>
  );
};

export default ProductCard;

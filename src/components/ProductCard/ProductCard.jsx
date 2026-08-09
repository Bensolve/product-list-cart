function ProductCard({ product, quantity, onAddToCart, onIncrease, onDecrease }) {
  return (
    <div className={`product-card ${quantity > 0 ? "in-cart" : ""}`}>
      <img src={product.image.desktop} alt="" className="product-image" />

      {quantity === 0 ? (
        <button
          type="button"
          className="add-to-cart-btn"
          onClick={() => onAddToCart(product)}
        >
          <img src="/images/icon-add-to-cart.svg" alt="" />
          Add to Cart
        </button>
      ) : (
        <div className="quantity-stepper">
          <button
            type="button"
            onClick={() => onDecrease(product.name)}
            aria-label={`Decrease quantity of ${product.name}`}
          >
            <img src="/images/icon-decrement-quantity.svg" alt="" />
          </button>
          <span>{quantity}</span>
          <button
            type="button"
            onClick={() => onIncrease(product.name)}
            aria-label={`Increase quantity of ${product.name}`}
          >
            <img src="/images/icon-increment-quantity.svg" alt="" />
          </button>
        </div>
      )}

      <p className="product-category">{product.category}</p>
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">${product.price.toFixed(2)}</p>
    </div>
  );
}

export default ProductCard;
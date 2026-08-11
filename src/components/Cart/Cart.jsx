function Cart({ cart, onRemove, onConfirmOrder }) {
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div className="cart">
      <h2>Your Cart ({cartCount})</h2>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <img src="/images/illustration-empty-cart.svg" alt="" />
          <p>Your added items will appear here</p>
        </div>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.name}>
                <div>
                  <p>{item.name}</p>
                  <p className="item-meta">
                    <span className="item-qty">{item.quantity}x</span>
                    <span className="item-unit-price">
                      @ ${item.price.toFixed(2)}
                    </span>
                    <span className="item-total">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onRemove(item.name)}
                  aria-label={`Remove ${item.name} from cart`}
                >
                  <img src="/images/icon-remove-item.svg" alt="" />
                </button>
              </li>
            ))}
          </ul>

          <p className="order-total">
            <span className="order-total-label">Order Total</span>
            <span className="order-total-value">${cartTotal.toFixed(2)}</span>
          </p>
          <div className="carbon-note">
            <img src="/images/icon-carbon-neutral.svg" alt="" />
            <p>
              This is a <strong>carbon-neutral</strong> delivery
            </p>
          </div>
         <button type="button" className="confirm-order-btn" onClick={onConfirmOrder}>
  Confirm Order
</button>
        </>
      )}
    </div>
  );
}

export default Cart;

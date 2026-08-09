function Cart({ cart, onRemove, onConfirmOrder }) {
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
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
                <p>{item.name}</p>
                <p>
                  {item.quantity}x @ ${item.price.toFixed(2)} $
                  {(item.price * item.quantity).toFixed(2)}
                </p>
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

          <div className="carbon-note">
  <img src="/images/icon-carbon-neutral.svg" alt="" />
  <p>
    This is a <strong>carbon-neutral</strong> delivery
  </p>
</div>
          <p>Order Total: ${cartTotal.toFixed(2)}</p>
          <button type="button" onClick={onConfirmOrder}>
            Confirm Order
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
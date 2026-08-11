function OrderModal({ cart, onStartNewOrder }) {
  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="modal-overlay">
      <div className="modal">
        <img src="/images/icon-order-confirmed.svg" alt="" className="order-confirmed-icon" />
        <h2 className="order-confirmed-heading">
          Order<br className="mobile-break" />Confirmed
        </h2>

        <p>We hope you enjoy your food!</p>

        <ul>
          {cart.map((item) => (
            <li key={item.name}>
              <img
                src={item.image.thumbnail}
                alt=""
                className="modal-item-image"
              />
              <div className="modal-item-info">
                <p className="modal-item-name">{item.name}</p>
                <p className="item-meta">
                  <span className="item-qty">{item.quantity}x</span>
                  <span className="item-unit-price">
                    @ ${item.price.toFixed(2)}
                  </span>
                </p>
              </div>
              <p className="modal-item-total">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </li>
          ))}
        </ul>

        <p className="order-total">
          <span className="order-total-label">Order Total</span>
          <span className="order-total-value">${cartTotal.toFixed(2)}</span>
        </p>

        <button
          type="button"
          className="start-new-order-btn"
          onClick={onStartNewOrder}
        >
          Start New Order
        </button>
      </div>
    </div>
  );
}

export default OrderModal;
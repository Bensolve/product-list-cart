function OrderModal({ cart, onStartNewOrder }) {
  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="modal-overlay">
      <div className="modal">
        <img src="/images/icon-order-confirmed.svg" alt="" className="order-confirmed-icon" />
        <h2>Order Confirmed</h2>
        
        <p>We hope you enjoy your food!</p>

        <ul>
          {cart.map((item) => (
            <li key={item.name}>
              <p>{item.name}</p>
              <p>
                {item.quantity}x @ ${item.price.toFixed(2)}
              </p>
              <p>${(item.price * item.quantity).toFixed(2)}</p>
            </li>
          ))}
        </ul>

        <p>Order Total: ${cartTotal.toFixed(2)}</p>

        <button type="button" onClick={onStartNewOrder}>
          Start New Order
        </button>
      </div>
    </div>
  );
}

export default OrderModal;
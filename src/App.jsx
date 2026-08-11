import { useState } from "react";
import ProductList from "./components/ProductList/ProductList";
import Cart from "./components/Cart/Cart";
import OrderModal from "./components/OrderModal/OrderModal";

function App() {
  const [cart, setCart] = useState([]);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  function addToCart(product) {
    setCart([...cart, { ...product, quantity: 1 }]);
  }

  function increaseQuantity(productName) {
    setCart(
      cart.map((item) =>
        item.name === productName
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  function decreaseQuantity(productName) {
    const item = cart.find((item) => item.name === productName);
    if (item.quantity === 1) {
      setCart(cart.filter((item) => item.name !== productName));
    } else {
      setCart(
        cart.map((item) =>
          item.name === productName
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }
  }

  function removeFromCart(productName) {
    setCart(cart.filter((item) => item.name !== productName));
  }

  function confirmOrder() {
    setOrderConfirmed(true);
  }

  function startNewOrder() {
    setCart([]);
    setOrderConfirmed(false);
  }

  return (
    <main className="app">
      <h1>Desserts</h1>
      <ProductList
        cart={cart}
        onAddToCart={addToCart}
        onIncrease={increaseQuantity}
        onDecrease={decreaseQuantity}
      />
      <Cart
        cart={cart}
        onRemove={removeFromCart}
        onConfirmOrder={confirmOrder}
      />
      {orderConfirmed && (
        <OrderModal cart={cart} onStartNewOrder={startNewOrder} />
      )}
    </main>
  )
}

export default App
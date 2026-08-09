import products from "../../data/products.json";
import ProductCard from "../ProductCard/ProductCard";

function ProductList({ cart, onAddToCart, onIncrease, onDecrease }) {
  return (
    <div className="product-list">
      {products.map((product) => {
        const cartItem = cart.find((item) => item.name === product.name);
        return (
          <ProductCard
            key={product.name}
            product={product}
            quantity={cartItem ? cartItem.quantity : 0}
            onAddToCart={onAddToCart}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
          />
        );
      })}
    </div>
  );
}

export default ProductList;
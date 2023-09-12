import { CheckoutItem } from "../components/CheckoutItem";
import { useShoppingCart } from "../contex/ShoppingCartContext";
import "../styles/Checkout.css";

export const Checkout = () => {
  const { cartItems } = useShoppingCart();
  return (
    <div className="product-div-wrapper">
      <div className="product-info">
        <p className="p-item">Item</p>
        <div className="quantity-and-price">
          <p className="p-quantity">Qty</p>
          <p className="p-price">Price</p>
        </div>
      </div>
      <div className="item-div">
        {cartItems.map((item) => (
          <CheckoutItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

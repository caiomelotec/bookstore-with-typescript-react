import { CheckoutItem } from "../components/CheckoutItem";
import { useShoppingCart } from "../contex/ShoppingCartContext";
import StripeIMG from "../../public/img/stripeimg.png";
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
      <div className="payment-div">
        <div className="total-payment-div">
          <p className="total-p">Total: 42.14$</p>
          <button className="checkout-btn">CHECKOUT</button>
        </div>
        <div className="stripe">
          <img src={StripeIMG} alt="" />
        </div>
      </div>
    </div>
  );
};

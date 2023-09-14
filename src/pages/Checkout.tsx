import { CheckoutItem } from "../components/CheckoutItem";
import { useShoppingCart } from "../contex/ShoppingCartContext";
import StripeIMG from "../../public/img/stripeimg.png";
import "../styles/Checkout.css";
import { formatCurrency } from "../ultilities/formatCurrency";
import books from "../data/fakebooks.json";

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

      {cartItems.map((item) => (
        <CheckoutItem key={item.id} {...item} />
      ))}

      <div className="payment-div">
        <div className="total-payment-div">
          <p className="total-p">
            Total:{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = books.find((book) => book.id == cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </p>
          <button className="checkout-btn">CHECKOUT</button>
        </div>
        <div className="stripe">
          <img src={StripeIMG} alt="" />
        </div>
      </div>
    </div>
  );
};

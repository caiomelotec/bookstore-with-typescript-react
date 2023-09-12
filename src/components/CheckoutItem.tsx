import { BsFillCircleFill } from "react-icons/bs";
import { LuTrash2 } from "react-icons/lu";
import books from "../data/fakebooks.json";
import "../styles/CheckoutItem.css";
import { useShoppingCart } from "../contex/ShoppingCartContext";
import { useState } from "react";
import { formatCurrency } from "../ultilities/formatCurrency";

type CartItemsProps = {
  id: number;
  quantity: number;
};

export const CheckoutItem = ({
  id,
  quantity: initialQuantity,
}: CartItemsProps) => {
  const [inputQuantity, setInputQuantity] = useState<number>(initialQuantity);

  const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } =
    useShoppingCart();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let newNumber = Number(e.target.value);
    if (initialQuantity < newNumber) {
      setInputQuantity(newNumber);
      increaseCartQuantity(id);
    } else if (initialQuantity > newNumber) {
      setInputQuantity(newNumber);
      decreaseCartQuantity(id);
    }
  };

  const checkoutItem = books.find((book) => book.id === id);

  if (checkoutItem === null) return null;
  return (
    <div className="wrapper-checkout-item">
      <div className="checkout-img-and-info">
        <img src={checkoutItem?.imgUrl} className="checkout-img-item" alt="" />
        <div className="checkoutitem-info-div">
          <h2 className="checkoutitem-title">{checkoutItem?.title}</h2>
          <p className="checkoutitem-author">{checkoutItem?.author}</p>
          <div className="checkout-delivery">
            <span className="delivery-span">Delivery</span>
            <BsFillCircleFill
              size={20}
              fill={checkoutItem?.delivery ? "green" : "red"}
            />
          </div>
        </div>
      </div>
      <div className="price-and-quantity">
        <form>
          <input
            className="input-quantity"
            style={{ color: "black" }}
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            value={inputQuantity}
            onChange={handleInputChange}
          />
        </form>
        <p style={{ color: "black" }}>{formatCurrency(checkoutItem!.price)}</p>
        <LuTrash2
          size={27}
          fill="black"
          className="trash-icon"
          onClick={() => removeFromCart(id)}
        />
      </div>
    </div>
  );
};
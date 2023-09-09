import books from "../data/fakebooks.json";
import "../styles/Store.css";
import { BsFillCircleFill } from "react-icons/bs";
import { formatCurrency } from "../ultilities/formatCurrency";
import { useShoppingCart } from "../contex/ShoppingCartContext";

export const Store = () => {
  const { increaseCartQuantity, decreaseCartQuantity, cartItems } =
    useShoppingCart();

  return (
    <div className="wrapper-store-container">
      {books.slice(9, 18).map((book) => (
        <div key={book.id} className="store-container">
          <img className="book-img-store" src={book.imgUrl} />
          <p className="book-title">{book.title}</p>
          <p className="book-author">{book.author}</p>
          <div className="price-delivery-div">
            <span className="book-price">{formatCurrency(book.price)}</span>
            <div>
              <span className="delivery-span">Delivery</span>
              <BsFillCircleFill
                size={20}
                fill={book.delivery ? "green" : "red"}
              />
            </div>
          </div>
          {cartItems.length > 0 ? (
            <div className="div-btns">
              <button
                className="add-cart-btn"
                onClick={() => increaseCartQuantity(book.id)}
              >
                +
              </button>

              <button
                onClick={() => decreaseCartQuantity(book.id)}
                className="sub-cart-btn"
              >
                -
              </button>
            </div>
          ) : (
            <button
              className="add-cart-btn add-btn-big"
              onClick={() => increaseCartQuantity(book.id)}
            >
              ADD TO CART
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

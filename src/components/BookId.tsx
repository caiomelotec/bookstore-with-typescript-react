import { useParams } from "react-router-dom";
import books from "../data/fakebooks.json";
import "../styles/BookId.css";
import { formatCurrency } from "../ultilities/formatCurrency";
import { BsFillCircleFill } from "react-icons/bs";
import { useShoppingCart } from "../contex/ShoppingCartContext";
export type Book = {
  id: string | number;
  title: string;
  author: string;
  price: number;
  imgUrl?: string;
  delivery?: boolean;
};

export default function BookId() {
  // Get the book id from the route
  const { id } = useParams<{ id: string }>();
  // Find the selected book by its id
  const selectedBook: Book | undefined = books.find((book) => book.id === id);

  const { increaseCartQuantity, decreaseCartQuantity, getItemQuantity } =
    useShoppingCart();
  const quantity = getItemQuantity(id!);

  const buttonStyle = { cursor: "not-allowed", backgroundColor: "gray" };
  // If the book is not found, display a message and potentially handle navigation
  if (!selectedBook) {
    return <div>Book not found</div>;
  }

  return (
    <div className="book-id-container-wrapper">
      <div className="book-id-container">
        <img
          className="book-id-img"
          src={selectedBook.imgUrl}
          alt={selectedBook.title}
        />
        <div className="div-book-info">
          <h1 className="h1-book-title">{selectedBook.title}</h1>
          <p className="p-book-author">Author: {selectedBook.author}</p>
          <div className="div-delivery-span-and-icon">
            <span className="delivery-span">Delivery</span>
            <BsFillCircleFill
              size={20}
              fill={selectedBook.delivery ? "green" : "red"}
            />
          </div>
          <p className="p-book-price">
            Price: {formatCurrency(selectedBook.price)}
          </p>
          {quantity > 0 ? (
            <div className="div-btns">
              <button
                className="add-cart-btn"
                onClick={() => increaseCartQuantity(id!)}
              >
                +
              </button>
              <span className="quantity-span">{quantity}</span>
              <button
                onClick={() => decreaseCartQuantity(id!)}
                className="sub-cart-btn"
              >
                -
              </button>
            </div>
          ) : (
            <button
              className="add-cart-btn"
              onClick={() => increaseCartQuantity(id!)}
              disabled={!selectedBook.delivery}
              style={
                selectedBook.delivery ? { cursor: "pointer" } : buttonStyle
              }
            >
              ADD TO CART
            </button>
          )}
          <h2 className="h2-description">Description:</h2>
          <p className="p-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quaerat
            officia, dignissimos amet dolore itaque aperiam laboriosam maxime
            suscipit vero voluptas, excepturi explicabo. Tempore omnis maxime
            soluta accusantium odio quo. dignissimos amet dolore itaque aperiam
            laboriosam maxime suscipit vero voluptas, excepturi explicabo.
            Tempore omnis maxime soluta accusantium odio quo.
          </p>
        </div>
      </div>
    </div>
  );
}

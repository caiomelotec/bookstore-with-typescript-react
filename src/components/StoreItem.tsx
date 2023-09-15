import { BsFillCircleFill } from "react-icons/bs";
import { formatCurrency } from "../ultilities/formatCurrency";
import { useShoppingCart } from "../contex/ShoppingCartContext";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

type Book = {
  id: string;
  title: string;
  author: string;
  price: number;
  imgUrl?: string;
  delivery?: boolean;
};

export const StoreItem = ({
  id,
  author,
  title,
  price,
  imgUrl,
  delivery,
}: Book) => {
  const { increaseCartQuantity, decreaseCartQuantity, getItemQuantity } =
    useShoppingCart();

  let quantity = getItemQuantity(id);

  return (
    <div key={id} className="store-container">
      <Link to={`/bookdetail/${id}`}>
        <img className="book-img-store" src={imgUrl} />
      </Link>
      <Link to={`/bookdetail/${id}`}>
        <p className="book-title">{title}</p>
      </Link>
      <p className="book-author">{author}</p>
      <div className="price-delivery-div">
        <span className="book-price">{formatCurrency(price)}</span>
        <div>
          <span className="delivery-span">Delivery</span>
          <BsFillCircleFill size={20} fill={delivery ? "green" : "red"} />
        </div>
      </div>
      {quantity > 0 ? (
        <div className="div-btns">
          <button
            className="add-cart-btn"
            onClick={() => increaseCartQuantity(id)}
          >
            +
          </button>
          <span className="quantity-span">{quantity}</span>
          <button
            onClick={() => decreaseCartQuantity(id)}
            className="sub-cart-btn"
          >
            -
          </button>
        </div>
      ) : (
        <button
          className="add-cart-btn add-btn-big"
          onClick={() => increaseCartQuantity(id)}
        >
          ADD TO CART
        </button>
      )}
    </div>
  );
};

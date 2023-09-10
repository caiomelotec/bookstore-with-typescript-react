import { StoreItem } from "../components/StoreItem";
import books from "../data/fakebooks.json";
import "../styles/Store.css";

export const Store = () => {
  return (
    <div className="wrapper-store-container">
      {books.slice(9, 18).map((book) => (
        <div key={book.id}>
          <StoreItem {...book} />
        </div>
      ))}
    </div>
  );
};

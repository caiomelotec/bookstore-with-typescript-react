import { StoreItem } from "../components/StoreItem";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import books from "../data/fakebooks.json";
import "../styles/Store.css";

export const Store = () => {
  let { pageNumber } = useParams();
  const navigation = useNavigate();
  const location = useLocation();
  const itemsPerPage = 6; // Number of items to display per page

  if (pageNumber == null) return null;
  // Calculate the start and end index for slicing the books array
  //beggins in page 1
  const startIndex = (parseInt(pageNumber) - 1) * itemsPerPage;
  const endIndex = itemsPerPage + startIndex;
  // Slice the books array to get the items for the current page
  const currentPageBooks = books.slice(startIndex, endIndex);

  return (
    <>
      <div className="wrapper-store-container">
        {currentPageBooks.map((book) => (
          <div key={book.id}>
            <StoreItem {...book} />
          </div>
        ))}
      </div>
      <div className="pagination-btns-div">
        <button
          className={
            location.pathname === `/store/${1}`
              ? "active-page"
              : "pagination-btn"
          }
          onClick={() => navigation(`/store/${1}`)}
        >
          1
        </button>
        <button
          className={
            location.pathname === `/store/${2}`
              ? "active-page"
              : "pagination-btn"
          }
          onClick={() => navigation(`/store/${2}`)}
        >
          2
        </button>{" "}
        <button
          className={
            location.pathname === `/store/${3}`
              ? "active-page"
              : "pagination-btn"
          }
          onClick={() => navigation(`/store/${3}`)}
        >
          3
        </button>{" "}
        <button
          className={
            location.pathname === `/store/${4}`
              ? "active-page"
              : "pagination-btn"
          }
          onClick={() => navigation(`/store/${4}`)}
        >
          4
        </button>
        <button
          className={
            location.pathname === `/store/${5}`
              ? "active-page"
              : "pagination-btn"
          }
          onClick={() => navigation(`/store/${5}`)}
        >
          5
        </button>
      </div>
    </>
  );
};

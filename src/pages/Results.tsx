import { useResults } from "../contex/ResultsContext";
import "../styles/Results.css";
import { formatCurrency } from "../ultilities/formatCurrency";
import { BsFillCircleFill } from "react-icons/bs";

export const Results = () => {
  const { results } = useResults();
  return (
    <>
      <h2 className="results-h2">Results: {results.length}</h2>
      <div className="wrapper-results-container">
        {results.map((book) => (
          <div key={book.id} className="results-container">
            <img className="book-img" src={book.imgUrl} alt="" />
            <div className="book-info">
              <p className="book-title">{book.title}</p>
              <p className="book-author">{book.author}</p>
              <p className="book-price">{formatCurrency(book.price)}</p>
              <div>
                <span>Delivery</span>
                <span>
                  <BsFillCircleFill
                    size={8}
                    fill={book.delivery ? "green" : "red"}
                  />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

import React, { useState } from "react";
import "../styles/Header.css";
import { BsFillCartFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { useNavigate, Link } from "react-router-dom";
import books from "../data/fakebooks.json";
import { useResults } from "../contex/ResultsContext";

type Book = {
  id: number;
  title: string;
  author: string;
  price: number;
};

export const Header = () => {
  const navigate = useNavigate();

  const { setResults } = useResults();

  const [query, setQuery] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value);
  };

  /*SEARCH FUNCTION */
  const filterBooks = (): void => {
    const filteredResults: Book[] = books.filter(
      (book) =>
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.author.toLowerCase().includes(query.toLowerCase())
    );

    setResults(filteredResults);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (query === "") {
      setResults([]);
      return;
    }

    filterBooks();

    navigate("/results");

    setQuery("");
  };

  return (
    <header>
      <h1 onClick={() => navigate("/")} className="h1-logo">
        BookStore
      </h1>
      <form action="" className="form-search" onSubmit={handleSubmit}>
        <input
          onChange={handleInputChange}
          value={query}
          type="search"
          className="input-search"
        />
        <button className="search-icon" type="submit">
          <FiSearch className="search-icon" size={35} />
        </button>
      </form>
      <nav>
        <Link to="/">Home</Link>
        <a href="">About</a>
        <a href="">Store</a>
      </nav>
      <div className="warenkorb">
        <BsFillCartFill size={22} />
        <span>0</span>
      </div>
    </header>
  );
};

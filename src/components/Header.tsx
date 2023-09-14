import React, { useState } from "react";
import "../styles/Header.css";
import { BsFillCartFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { useNavigate, Link } from "react-router-dom";
import books from "../data/fakebooks.json";
import { useResults } from "../contex/ResultsContext";
import { GiHamburgerMenu } from "react-icons/gi";
import { useShoppingCart } from "../contex/ShoppingCartContext";

type Book = {
  id: number;
  title: string;
  author: string;
  price: number;
};

export const Header = () => {
  const navigate = useNavigate();

  const { setResults } = useResults();
  const { cartQuantity } = useShoppingCart();

  const [query, setQuery] = useState<string>("");
  const [toggle, setToggle] = useState<boolean>(false);

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

    if (toggle) {
      setToggle(false);
    }
  };

  return (
    <header>
      <div className="logo-and-input-div">
        <h1 onClick={() => navigate("/")} className="h1-logo">
          BookStore
        </h1>
        <form action="" className="form-search" onSubmit={handleSubmit}>
          <input
            onChange={handleInputChange}
            value={query}
            type="search"
            className="input-search"
            placeholder="Search books or authors"
          />
          <button className="search-icon" type="submit">
            <FiSearch className="search-icon" size={35} />
          </button>
        </form>
      </div>
      <nav>
        <Link className="nav-link" to="/">
          Home
        </Link>
        <a className="nav-link">About</a>
        <Link to={`/store/${1}`} className="nav-link">
          Store
        </Link>
      </nav>
      <div className="warenkorb" onClick={() => navigate("/checkout")}>
        <BsFillCartFill className="warenkorb-icon" size={32} />
        <span>{cartQuantity}</span>
      </div>
      {/* mobile menu*/}
      <button
        className="hamburger-menu"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <GiHamburgerMenu size={30} fill="white" className="hamburger-menu" />
      </button>
      <nav
        className="mobile-menu"
        style={toggle ? { left: "0" } : { left: "-50rem" }}
      >
        <Link
          onClick={() => {
            setToggle(false);
          }}
          className="mobile-nav-link"
          to="/"
        >
          Home
        </Link>
        <a className="mobile-nav-link">About</a>
        <Link
          className="mobile-nav-link"
          onClick={() => {
            setToggle(false);
          }}
          to="/store"
        >
          Store
        </Link>
      </nav>
    </header>
  );
};

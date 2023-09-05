// import { useState } from "react";
import "../styles/Header.css";
import { BsFillCartFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { useQueryContext } from "../contex/QueryContext";

export const Header = () => {
  const { query, setQuery } = useQueryContext();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value);
  };

  return (
    <header>
      <h1 className="h1-logo">BookStore</h1>
      <form action="" className="form-search">
        <input
          onChange={handleInputChange}
          value={query}
          type="search"
          className="input-search"
        />
        <FiSearch className="search-icon" size={35} />
      </form>
      <nav>
        <a href="">Home</a>
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

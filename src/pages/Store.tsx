import { useMemo } from "react";
import { useQueryContext } from "../contex/QueryContext";
import books from "../data/fakebooks.json";

export const Store = () => {
  const { query } = useQueryContext();

  const filteredItems = useMemo(() => {
    return books.filter((item) => {
      // Apply toLowerCase() to the properties you want to filter by
      return (
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.author.toLowerCase().includes(query.toLowerCase())
      );
    });
  }, [books, query]);

  return (
    <div style={{ textAlign: "center" }}>
      {filteredItems.map((book) => (
        <div key={book.id} style={{ marginBottom: "1rem" }}>
          <span style={{ margin: "1rem" }}>{book.title}</span>
          <span style={{ margin: "1rem" }}>{book.author}</span>
          <span style={{ margin: "1rem" }}>{book.price}</span>
        </div>
      ))}
    </div>
  );
};

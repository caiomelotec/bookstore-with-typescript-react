import { CarouselComponent } from "../components/CarouselComponent";
import "../styles/Home.css";
import books from "../data/fakebooks.json";

export const Home = () => {
  return (
    <>
      <div>
        <h2 className="info-01">New Releases This Week</h2>
        <CarouselComponent books={books.slice(20, 29)} />
      </div>
      <div>
        <h2 className="info-01">Best Sellers of the Week</h2>
        <CarouselComponent books={books} />
      </div>
    </>
  );
};

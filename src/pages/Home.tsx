import { CarouselComponent } from "../components/CarouselComponent";
import "../styles/Home.css";

export const Home = () => {
  return (
    <>
      <h2 className="info-01">New Releases This Week</h2>
      <CarouselComponent deviceType={"desktop"} />
      <h2 className="info-01">New Releases This Week</h2>
      <CarouselComponent deviceType={"desktop"} />
    </>
  );
};

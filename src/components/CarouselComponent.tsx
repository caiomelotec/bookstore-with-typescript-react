import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import books from "../data/fakebooks.json";
import "../styles/Carousel.css";

interface CarouselComponentProps {
  deviceType: string; // Change the type to an array of strings
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 825 },
    items: 4,
    slidesToSlide: 2, // optional, default to 1.
  },
  test: {
    breakpoint: { max: 825, min: 465 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export const CarouselComponent = (props: CarouselComponentProps) => {
  return (
    <>
      <div className="test-01">
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={props.deviceType !== "mobile"}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          customTransition="all 0.5s"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile", "test"]}
          deviceType={props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {books.map((book) => (
            <div className="test" key={book.id}>
              <img src={book.imgUrl} alt="" className="carousel-img" />
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

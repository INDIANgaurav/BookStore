import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import { useEffect, useState } from "react";

// import list from "../../public/list.json";
import Cards from "./Cards";
const FreeBooks = () => {
  const [book, setBook] = useState([]);
  // console.log("your fetched book data ->" + book);
  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:5001/book/getbook");
      const data = response.data;
      console.log("API response data:", data.book);
      setBook(data.book.filter((data)=> data.category === "Free"))
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="  mx-auto md:px-20   px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2  ">Free Offered Books</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            laboriosam nulla quisquam. Lorem ipsum dolor sit.
          </p>
        </div>
        <div className="ml-6 md:ml-24">
          <Slider {...settings}>
            {book.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default FreeBooks;

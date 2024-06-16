import { Link } from "react-router-dom";
// import list from "../../public/list.json";
import Cards from "./Cards";
import axios from "axios";
import { useEffect, useState } from "react";
function Course() {
  const [book, setBook] = useState([]);
  // console.log("your fetched book data ->" + book);
  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:5001/book/getbook");
      const data = response.data;
      console.log("API response data:", data.book);
      setBook(data.book)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="mx-w-screen-2xl  container mx-auto md:px-20 px-2">
        <div className="mt-16  text-center">
          <h1 className="text-2xl py-4  md:text-4xl">
            {" "}
            We're delighted to have you{" "}
            <span className="text-pink-500">Here!</span>
          </h1>
          <p className="  md:mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            inventore eum quae, aspernatur labore impedit aperiam ratione, atque
            eos, reprehenderit qui veritatis consectetur repellat sequi?
          </p>
          <Link to="/">
            <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6">
              Back
            </button>
          </Link>
        </div>
        <div className="md:mt-12  grid grid-cols-1 md:grid-cols-4 ">
          {book.filter((item) => item.price > 0).map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;

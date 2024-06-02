import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import FreeBooks from "../components/FreeBooks";
import Navbar from "../components/Navbar";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <FreeBooks />
      <Footer />
    </div>
  );
};

export default Home;

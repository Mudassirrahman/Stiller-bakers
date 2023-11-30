import React from "react";
import About from "./About";
import Footer from "./Footer";
import Menu from "./Menu";
import MenuHeading from "./MenuHeading";
import Order from "./Order";
import Search from "./Search";
import Hero from "./Hero";
import Dishes from "./Dishes";
import Navbar from "./navbar/Navbar";
import ReviewSection from "./FeedBack";

export default function Home({ handleClick }) {
  return (
    <>
      <Hero />
      <Navbar />
      <Search />
      <Dishes handleClick={handleClick} />
      <About />
      <MenuHeading />
      <Menu />
      <ReviewSection />
      <Order />
      <Footer />
    </>
  );
}

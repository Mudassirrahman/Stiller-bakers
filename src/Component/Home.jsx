import React from "react";
import About from "./About";
import Footer from "./Footer";
import Menu from "./Menu";
import MenuHeading from "./MenuHeading";
import Order from "./Order";
import Search from "./Search";
import Revew from "./Revew";
import Review from "./Review";
import Hero from "./Hero";
import Dishes from "./Dishes";
import Navbar from "./navbar/Navbar";

export default function Home(val, { item, handleClick }) {
  return (
    <>
      <Hero />
      <Navbar />
      <Search />
      <Dishes handleClick={handleClick} />
      <About />
      <MenuHeading />
      <Menu />
      <Revew />
      <Review />
      <Order />
      <Footer />
    </>
  );
}

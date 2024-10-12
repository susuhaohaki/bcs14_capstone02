import React from "react";
import Hero from "../components/Hero";
import LastCollection from "../components/LastCollection";
import BestSeller from "../components/BestSeller";
import NewsletterBox from "../components/NewsletterBox";

const Home = () => {
  return (
    <div>
      <Hero />
      <LastCollection />
      <BestSeller />
      <NewsletterBox />
    </div>
  );
};

export default Home;

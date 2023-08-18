import React from "react";
import HeroSection from "./component/HeroSection";
import Services from "./component/Services";


function Home() {
  const data = {
    name: "Open Limits",
  };
  return (
    <>
      <HeroSection myData={data} />
      <Services />

      
    </>
  );
}

export default Home;

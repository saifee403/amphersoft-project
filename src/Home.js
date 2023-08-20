import React from "react";
import HeroSection from "./component/HeroSection";
import Services from "./component/Services";
import FeatureProduct from "./component/FeatureProduct";


function Home() {
  const data = {
    name: "Open Limits",
  };
  return (
    <>
      <HeroSection myData={data} />
      <FeatureProduct/>
      <Services />

      
    </>
  );
}

export default Home;

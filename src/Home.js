import React from "react";
import HeroSection from "./component/HeroSection";
import Services from "./component/Services";
import Trusted from "./component/Trusted";

function Home() {
  const data = {
    name: "Open Limits",
  };
  return (
    <>
      <HeroSection myData={data} />
      <Services />
      <Trusted />
    </>
  );
}

export default Home;

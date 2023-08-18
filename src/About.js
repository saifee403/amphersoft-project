import React from 'react'
import HeroSection from './component/HeroSection';

function About() {
    const data = {
        name: "Eshop",
      };
  return (
    <HeroSection myData={data}/>
  )
}

export default About
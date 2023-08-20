import React from 'react'
import HeroSection from './component/HeroSection';
import { useProductContext } from './context/productContext';

function About() {
  const { myName } = useProductContext();
    const data = {
        name: "Eshop",
      };
  return (
    <>
    {myName}
    <HeroSection myData={data}/>
    </>
  )
}

export default About
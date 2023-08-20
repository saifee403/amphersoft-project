import React, { useContext } from 'react'
import HeroSection from './component/HeroSection';
import {AppContext} from './context/productContext'

function About() {
  const myName = useContext(AppContext)
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
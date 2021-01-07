import '../../App.css'
import HeroSection from '../heroSection'
import React from 'react';
import Cards from "../card";
import Footer from '../footer'
import Feature from '../feautures'
import Hari from '../hari'

function Home() {
    return (
        <>
            <HeroSection />
            <Cards/>
            <Feature />
            <Hari/>
            <Footer/>
           
        </>
    )
}





export default Home


import React from 'react'
import { Button } from './Button'
import '../App.css'
import './heroSection.css'

function HeroSection() {
    return (
        <>
        <div className='hero-container'>
      
        <h1>ADIWIATA UNTUK ALAM</h1>
        <p>menghijaukan alam sekitar</p>
        <div className='hero-btns'>
            <Button className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'>
                GET STARTED
            </Button>
            <Button className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'>
            WATCH TRAILER <i className='far fa-play-circle'/>
            </Button>
        </div>
        </div>



        


        </>
    )
}





export default HeroSection


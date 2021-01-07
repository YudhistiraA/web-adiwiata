import React from 'react'
import CradItem from "./carditem";
import './card.css'


function Card() {
    return (
        <div className="cards">
            <h1>Check out the Activity of     ADIWIYATA</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">

                        <CradItem 
                        src="images/img-11.jpg"
                        text="Kegiatan reduce  untuk menjaga alam sekitar"
                        label='Reduce'
                        path="/services" />

                    <CradItem 
                        src="images/img-12.jpg"
                        text="Kegiatan reuse untuk menjaga alam sekitar"
                        label='Reuse'
                        path="/services" />

                          


                        
                        
                    </ul>

                        <ul className="cards__items">

                        <CradItem 
                        src="images/img-13.jpg"
                        text="Kegiatan recycle untuk menjaga alam sekitar"
                        label='Recycle'
                        path="/services" />
                        

                        <CradItem 
                        src="images/img-14.jpg"
                        text="Kegiatan menanam pohon untuk menjaga alam sekitar"
                        label='Plant'
                        path="/services" />
                      

                      <CradItem 
                        src="images/img-15.jpg"
                        text="Kegiatan mengola sampah untuk menjaga alam sekitar"
                        label='Sampah'
                        path="/services" />



                </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Card

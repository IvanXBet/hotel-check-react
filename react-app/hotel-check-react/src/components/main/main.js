import { useState, useEffect, useRef } from 'react';


import MainItem from '../mainItem/mainItem';
import Slider from '../slider/MainSlaider'

import './main.scss';

const Main = ({hotels, city}) => {
    console.log(hotels)
    return(
        <section className="main">
            <div className="main__header">
                <div className="main__title">
                    <span>Отели</span>
                    <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Group 4">
                        <path id="Vector" d="M1 1.33334L9.66667 10L1 18.6667" stroke="#A7A7A7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                    </svg>
                    
                    <span>{city}</span>
                </div>

                <div className="main__date">07 июля 2020</div>
            </div>
            
            <Slider/>
  
            <div className="main__favorites">Добавлено в Избранное: <span>3</span> отеля</div>
            <div className="main__block">
                {
                    hotels.map(hotel => {
                        return (<MainItem data={hotel} key={hotel.hotelId}/>)
                    })
                }
                
            </div>
        </section>
    )
}

export default Main;
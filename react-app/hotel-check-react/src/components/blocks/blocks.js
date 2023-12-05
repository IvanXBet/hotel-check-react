import { useState, useEffect, useRef } from 'react';
import Filter from '../filter/filter';
import Main from '../main/main'
import Favorites from '../favorites/favorites';


import useHotellServise from '../../services/HotelServise.js'


import './blocks.scss';

const Blocks = () => {
    
    const [data, setData] = useState({});
    const [city, setCity] = useState('Москва');
    const [dateIn, setDateIn] = useState(new Date());
    const [dateOut, setDateOut] = useState(new Date(dateIn.getTime() + (24 * 60 * 60 * 1000)));

    
    
    useEffect(() => {
		onRequest()
	}, [])

    
    const {getHotels} = useHotellServise();

    const onRequest = () => {
        getHotels(city, convertDate(dateIn), convertDate(dateOut))
			.then(res => onHotelsLoaded(res))
    }

    const onHotelsLoaded = (data) => {
        const newData = {
            hotels: [...data],
            dateIn: dateIn,
            dateOut: dateOut
        }
        console.log(newData)
        setData(newData);
    }

    const inputLoc = (e) => {
        setCity(e.target.value)
    }

    const inputDate = (e) => {
        setDateIn(new Date(e.target.value))
    }
    
    const inputDays = (e) => {
        let newDate = new Date(dateIn)
        newDate.setDate( e.target.value - 0 + newDate.getDate())
        setDateOut(newDate)
    }


    const convertDate = (date) => {
        return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate() >= 10 ? date.getDate() : '0' + date.getDate()}`
    }

    const searchBtn = () => {
        
        onRequest()
    }


    return (
        <div className="blocks">
            <Filter 
                inputLoc = {inputLoc}
                inputDate = {inputDate}
                inputDays ={inputDays}
                searchBtn = {searchBtn}/>
            <Main hotels={data.hotels} city = {city}/>
            <Favorites/>
        </div>
    )
}

export default Blocks;
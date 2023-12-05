import { useState, useEffect, useRef } from 'react';

import './filter.scss';

const Filter = ({inputLoc, inputDate, inputDays, searchBtn}) => {

    return (
        <section className="filter">
            <div className="filter__location">
                <label htmlFor="location">Локация</label>
                <input onInput={inputLoc} id="location" placeholder="Москва" type="text" className=" input"/>
            </div>

            <div className="filter__date">
                <label htmlFor="date">Дата заселения</label>
                <input onInput={inputDate} id="date" type="date" placeholder="07.07.2020" className=" input"/>
            </div>

            <div className="filter__days">
                <label htmlFor="days">Количество дней</label>
                <input onInput={inputDays} min="2" id="days" placeholder="1" type="number" className=" input"/>
            </div>
            <button onClick = {searchBtn} className="btn filter__btn">Найти</button>
            
        </section>
    )
}

export default Filter;
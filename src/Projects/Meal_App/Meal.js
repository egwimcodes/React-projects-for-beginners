import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './Meal.css'


function Meal() {
    const [items, setItems] = useState([])
    useEffect(() => {
        axios
            .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
            .then((response) => {
                setItems(response.data.meals)
                console.log(response.data.meals)

            }).catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <>
            <h1 className='header-text'>SEA FOODS</h1>
            <div className='container'>
                <ul>
                    {items.map(({ idMeal, strMeal, strMealThumb }) => {
                        return <li key={idMeal}>
                            <div className="card">
                                <div className="img-section">
                                    <img src={strMealThumb} alt={strMeal} />
                                </div>
                                <div className="caption-section">
                                    <h3>{strMeal}</h3>
                                </div>
                            </div>
                        </li>
                    })}

                </ul>
            </div></>
    )
}

export default Meal
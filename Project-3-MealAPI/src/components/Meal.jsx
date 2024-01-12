import React from 'react'
import { useEffect,useState } from 'react';
import Axios from 'axios'
const Meal = () => {

    const [meal,setMeal] =useState([]);

    useEffect(()=>{
        Axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood").then((res)=>{
            setMeal(res.data.meals)
        }).catch((err)=>{
            console.log(err)
        })
    },[])
  return (
    <div>
      {meal.map(({strMeal,strMealThumb,idMeal})=>{
        return(
            <>
                <img src={strMealThumb} />
                <div>
                    <p>{strMeal}</p>
                    <p>#{idMeal}</p>
                </div>
            </>
        )
      })}
    </div>
  )
}

export default Meal

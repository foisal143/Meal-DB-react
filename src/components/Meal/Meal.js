import React from 'react';
import './Meal.css';
const Meal = props => {
  console.log(props);
  const handlerAddToCart = props.handlerAddToCart;
  const { strMealThumb, strCategory, strMeal } = props.meal;
  return (
    <div className="cart">
      <figure>
        <img src={strMealThumb} alt="" />
      </figure>
      <div className="mealsDetails">
        <h4>{strMeal}</h4>
        <p>{strCategory}</p>
        <button onClick={() => handlerAddToCart(props.meal)}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Meal;

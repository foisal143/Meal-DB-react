import React, { useEffect, useState } from 'react';
import './Meals.css';
import Meal from '../Meal/Meal';
import Cart from '../Cart/Cart';
import { getLocalData, setLocalData } from '../utilitys/utilitys';
const Meals = () => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=f')
      .then(res => res.json())
      .then(meals => setMeals(meals.meals));
  }, []);
  // state for cart
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const newData = [];
    const localData = getLocalData();
    for (const data of localData) {
      newData.push(data);
    }

    setCart(newData);
  }, [meals]);
  // handler for add to cart

  const handlerAddToCart = meal => {
    const newData = [...cart, meal.strMeal];

    const exist = cart.find(name => name === meal.strMeal);
    if (exist) {
      alert('allredy exist');
      return;
    }

    setLocalData(meal.strMeal);
    setCart(newData);
  };
  // handler for delete all
  const deleteHandler = () => {
    localStorage.removeItem('cart');
    setCart([]);
  };
  console.log(cart);
  return (
    <div className="mealsContainer">
      <div>
        <h2 className="mealHead">All Meals here</h2>
        <div className="mealCartSection">
          {meals &&
            meals.map(meal => (
              <Meal
                meal={meal}
                key={meal.idMeal}
                handlerAddToCart={handlerAddToCart}
              ></Meal>
            ))}
        </div>
      </div>
      <div className="cartContainer">
        <h3 className="mealHead">Your Cart Here</h3>
        <div className="cartSection">
          <Cart c={cart}></Cart>
          <button onClick={deleteHandler}>Delete All</button>
        </div>
      </div>
    </div>
  );
};

export default Meals;

import React from 'react';
import './Cart.css';
const Cart = props => {
  console.log(props.c);
  const meals = props.c;
  let allName = '';
  for (const meal of meals) {
    if (allName) {
      allName = allName + ' , ' + meal;
    } else {
      allName = allName + '  ' + meal;
    }
  }
  return (
    <>
      <p>
        <span>Name:</span> {allName}
      </p>
    </>
  );
};

export default Cart;

import React from 'react';
import './App.css';
import Summary from './Summary';
import Total from './Total';

function Cart(props) {
  return(
    <section className="main__summary">
      <h2>Your cart</h2>
      <Summary selected={props.selected} />
      <Total selected={props.selected} />  
    </section>
  )    
}

export default Cart;
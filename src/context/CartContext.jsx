
import React, { createContext, useEffect } from "react";
import { useParams } from "react-router-dom";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {

const [data, setData] = React.useState([]);
const [cart, setCart] = React.useState();
const [cartData, setCartData] = React.useState([]);

const [count, setCount] = React.useState(0);

useEffect(() => {
  fetchandUPdateData();
  fetchFromCartData();
},[])

const fetchandUPdateData = () =>{
 fetch(`https://fakestoreapi.com/products`)
  .then((res) => res.json())
  .then((res) => setData(res))
}

const fetchFromCartData = () => {
  fetch(`http://localhost:3800/cartData`)
    .then((res) => res.json())
    .then((res) => setCartData(res));
 }

const addToCart = (id) => {

const allId = cartData.find(ele => ele.id === id);


const itemAdd =  data.find(item => item.id === id);
const obj = {...itemAdd, quantity: 1};

allId ? (

alert("item aleready in cart")

) : (

  fetch(`http://localhost:3800/cartData`, {
    method:"POST",
    body:JSON.stringify(obj),
    headers:{
      "Content-Type":"application/json"
    }
  })

);
fetchFromCartData();

}

const handleDelete = (id) => {
  fetch(`http://localhost:3800/cartData/${id}`, {
    method:"DELETE",
    headers:{
      "Content-Type" : "application/json"
    }
  })
  fetchFromCartData();
}

const handleInc = (id, que, val) => {
  const itemAdd =  cartData.find(item => item.id === id);
   
  const obj = {...itemAdd, quantity: que+val};

  fetch(`http://localhost:3800/cartData/${id}`, {
    method:"PUT",
    body: JSON.stringify(obj),
    headers:{
      "Content-Type" : "application/json"
    }
  })
  fetchFromCartData();
}



  return <CartContext.Provider value={{data, addToCart, cart, cartData, handleDelete, handleInc, setCount, count}}>{children}</CartContext.Provider>;
};

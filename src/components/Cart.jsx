import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { CartContext } from "../context/CartContext";

const CartWrapper = styled.div`
  & {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 5vh;
  }
  h4,
  h5 {
    margin: 10px 0px;
  }
  & > div {
    max-width: 50%;
    min-width:350px;
    border: 1px solid gray;
    display: flex;
    gap: 5px;
    padding: 5px;
  }

  & > div > div {
    border: 1px solid gray;
    width: 100%;
    text-align: start;
    padding: 0px 10px;
  }

  & > div > img {
    width: 150px;
    aspect-ratio: 1/1;
    border: 1px solid gray;
  }

  .btn {
    margin: auto 0;
    padding: 5px 20px;
    font-size: 15px;
    font-weith: 600;
    text-align: center;
    cursor: pointer;
    outline: none;
    color: #fff;
    background-color: #04aa6d;
    border: none;
    border-radius: 15px;
    box-shadow: 0 4px #999;
  }

  .btn:hover {
    background-color: #3e8e41;
  }

  .btn:active {
    background-color: #3e8e41;
    box-shadow: 0 1px #666;
    transform: translateY(4px);
  }

  .quantity {
    border: 1px solid red;
    display: flex;
  }
  .quantity > h4 {
    margin: auto;
    padding-right: 20px;
  }
  .inc {
    display: flex;
    flex-direction: column;
  }
  .inc > button {
    padding: 0px 15px !important;
    font-weight: 800;
    font-size: 15px;
    border-radius: 5px;
  }
`;

function Cart() {
  const { handleDelete, cartData, handleInc, setCount, count } =
    useContext(CartContext);

  return (
    <CartWrapper>
      {cartData.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt="" />
          <div>
            <h5>{item.title}</h5>
            <h4>₹ {item.price} /-</h4>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                border: "1px solid red",
              }}
            >
              <button className="btn" onClick={() => handleDelete(item.id)}>
                Remove
              </button>
              <div className="quantity">
                <h4>{item.quantity}</h4>
                <div className="inc">
                  <button onClick={() => handleInc(item.id, item.quantity, 1)}>
                    +
                  </button>
                  <button
                    disabled={item.quantity === 1}
                    onClick={() => handleInc(item.id, item.quantity, -1)}
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
            <div style={{display:"flex", justifyContent:"end"}}>
              <h4>Total: {item.price * item.quantity} /-</h4>
            </div>


          </div>
        </div>
      ))}
    </CartWrapper>
  );
}

export default Cart;

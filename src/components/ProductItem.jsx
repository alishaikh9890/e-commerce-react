import React, { useEffect } from "react";
import { CartContext } from "../context/CartContext";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const ProductItemWrapper = styled.div`
border:1px solid red;
& > div{
  display:flex;
  border:1px solid red;
  margin:auto;
  text-align:start;
  padding:1%;
}
& > div > img{
  border:1px solid gainsboro;
  width:40%;
  aspect-ratio:1/1.2
}
& > div > div{
  padding:1%;
}

.btn {
  padding: 15px 45px;
  font-size: 24px;
  text-align: center;
  cursor: pointer;
  outline: none;
  color: #fff;
  background-color: #04AA6D;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
}

.btn:hover {background-color: #3e8e41}

.btn:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
`

const ProductItem = () => {

  const {addToCart} = React.useContext(CartContext)

  const [productDetails, setProductDetails] = React.useState([])
  const { productId } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((res) => setProductDetails(res))
  }, [productId])

  return <ProductItemWrapper>
    <div>
      <img src={productDetails.image} alt="" />
      <div>
        <h2>{productDetails.title}</h2>
        <h3>₹ {productDetails.price} /-</h3>
        <p>{productDetails.description}</p>
        <h5> category: {productDetails.category}</h5>
        <p>⭐️ {productDetails.rating?.rate}</p>
        <p>Items left: {productDetails.rating?.count}</p>
        <button className="btn" onClick={() => addToCart(productDetails.id)}>Add To Cart</button>
      </div>
    </div>
  </ProductItemWrapper>;
};

export default ProductItem;

import React from "react";
import { CartContext } from "../context/CartContext";
import styled from "styled-components";
import { Link } from "react-router-dom";



const Filters =styled.div`
margin-top:55px;
border:1px solid gray;
`;


const ProductWrapper = styled.div`
padding:2% 5%;
    display:grid;
    grid-template-columns:repeat(4, 1fr);
    
    @media (max-width:991px){
      grid-template-columns:repeat(3, 1fr);
    }
    
    @media (max-width:767px){
      grid-template-columns:repeat(2, 1fr);
    }
    
        @media (max-width:575px){
          grid-template-columns:repeat(1, 1fr);
        }

  & > div{
    padding:1vh;
    border:1px solid gray;
    margin:3%;
    text-align:start;
  }
  & > div > img{
    border:1px solid gray;
    width:100%;
    aspect-ratio:1/1;
  }
  & h4,h5{
    margin:5px 0px 
  }

  .buttons{
    display:flex;
    justify-content:space-between;
  }
  .btn {
    padding: 5px 25px;
    font-size: 18px;
    text-align: center;
    cursor: pointer;
    outline: none;
    color: #fff;
    background-color: #04AA6D;
    border: none;
    border-radius: 15px;
    box-shadow: 0 5px #999;
  }
  
  .btn:hover {background-color: #3e8e41}
  
  .btn:active {
    background-color: #3e8e41;
    box-shadow: 0 1px #666;
    transform: translateY(4px);
  }

  .buttons >  Link{
    border:1px solid red
  }
`
const Products = () => {
  const { data,addToCart } = React.useContext(CartContext);

  const [price, setPrice] = React.useState("price");
  const [category, setCategory] = React.useState("");

  const sdata = data.sort((a, b) => {
    
    if (price === 'lh') {
      return a.price - b.price;
    } else if(price === 'hl') {
      return b.price - a.price;
    } else if(price === 'price') {
        return;
    }
  });


  return <div>
  
  
    <Filters >
        <select onChange={(e) => setPrice(e.target.value)}>
          <option value="price" >Sort</option>
          <option value="lh" >Low - High</option>
          <option value="hl" >High - Low</option>
        </select>

        <select onChange={(e) => setCategory(e.target.value)} >
            <option>Men's Cloths</option>
            <option>Women's Cloths</option>
            <option>Jewelery</option>
        </select>
    
    </Filters>

  
  <ProductWrapper>


    {
      sdata.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt="" />
          <h5>{item.title}</h5>
          <h4>{item.price}</h4>
          <div className="buttons">
            <Link className="btn"
             style={{backgroundColor:"orange",textDecoration:"none",}} 
                         to={`/products/${item.id}`} >Detailes</Link>
            <button className="btn" onClick={() => addToCart(item.id)}>Add</button>
          </div>
        </div>
      ))
    }
  </ProductWrapper>
</div>
};

export default Products;

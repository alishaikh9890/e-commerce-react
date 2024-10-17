import React,{useState,useEffect} from "react";
import styled from "styled-components"
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
const NavbarWrapper = styled.div`
    background-color:#04AA6D;
    display:flex;
    padding:1%;
    justify-content:space-evenly;
    font-size:20px;
    font-weight:600;
   
    @media(min-width:768px){
      position:fixed;
       top:0px;
       width:100%;
    }

    @media(max-width:767px){
      position:fixed;
      bottom:0px;
      width:100%;
      background-color:gainsboro;
      box-shadow: 0 26px 58px 0 rgba(0, 0, 0, .22), 0 5px 14px 0 rgba(0, 0, 0, .18);
    }

    & > div:hover{
      background-color:white;
      color:black;
    }
`

const StyledLink = styled(Link)`
  display: flex;
  padding: 1px 10px;
  color:white;
  margin:auto;
  text-decoration: none;
  
  border-radius:10px;

  &:hover{
    background-color:white;
    color:green;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }
`;


const Navbar = () => {

  const {cartData} = React.useContext(CartContext)

    const [isSmallScreen, setIsSmallScreen] = useState(false);
  
    useEffect(() => {
      const handleResize = () => {
        setIsSmallScreen(window.innerWidth <= 600);
      };
  
      // Set initial screen size
      handleResize();
  
      // Listen to resize events
      window.addEventListener('resize', handleResize);
  
      // Clean up
      return () => window.removeEventListener('resize', handleResize);
    }, []);


  return <NavbarWrapper>
    <StyledLink style={{color:"black", backgroundColor:"white"}} to="/home">{isSmallScreen ? "A" : "ALISHAN"}</StyledLink>
    <StyledLink to="/home">{isSmallScreen ? "🏠" : "HOME"}</StyledLink>
    <StyledLink to="/">{isSmallScreen ? "🧑🏻‍💼" : "LOGIN"}</StyledLink>
  <StyledLink to="/products">{isSmallScreen ? "📦" : "PRODUCTS"}</StyledLink>
  <StyledLink to="/cart">🛒 {cartData.length}</StyledLink>
  
  </NavbarWrapper>;
};

export default Navbar;

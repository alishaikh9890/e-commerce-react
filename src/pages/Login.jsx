
import React from 'react'
import styled from 'styled-components'
import { AuthContext } from '../context/AuthContext'

const NavbarWrapper = styled.div`
        border:1px solid red;
        width:fit-content;
        margin: 10% auto;
        display:flex;
        flex-direction:column;
        padding:2%;

        & label{
          display:flex;
          flex-direction:column;
          text-align:start;
        }

        & input{
          margin-bottom:10%;
          width:300px;
          font-size:17px;
          padding:1vh;
        }

        & button{
          margin:auto;
          padding:.5vh 2vh;
          font-size:15px;
          font-weight:600
        }
`

function Login() {
    const {setEmail, setPassword, handleLogin} = React.useContext(AuthContext)

  return (
    <NavbarWrapper>
        <h2>LOGIN </h2>
        <label>Email
        <input type='email' placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)}/></label>
        <label>Password
        <input type='password' placeholder='*****' onChange={(e) => setPassword(e.target.value)} /></label>
        <button onClick={handleLogin}>Submit</button>
    </NavbarWrapper>
  )
}

export default Login;

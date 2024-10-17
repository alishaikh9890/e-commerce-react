import React, { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const navigate = useNavigate()

  const handleLogin = () => {
    const payload = {email, password};
    fetch(`https://reqres.in/api/login`, {
      method:"POST",
      body:JSON.stringify(payload),
      headers: {
        "Content-Type" : "application/json"
      }
    })
    .then((res) => res.json())
    .then((res) => {
      if(res.token){
        navigate("/home")
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }




  

  return <AuthContext.Provider value={{setEmail, setPassword, handleLogin}}>
   {children}
          </AuthContext.Provider>
};

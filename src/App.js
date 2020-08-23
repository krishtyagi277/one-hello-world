import React from "react";
import "./style.css"
import Button from "./Button"

const obj1 = {
    name:"play store",
    color:"red"
}
const obj2 = {
    name:"App store",
    color:"green"
}
const App = ()=>{
    return (
        <div>
        <h1 style={{textAlign:"center"}}>hello world </h1>
        <Button title={obj1}/>
        <Button title={obj2}/>
       </div>
    )
   
   }


export default App;   

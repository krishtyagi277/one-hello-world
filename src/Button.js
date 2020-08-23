import React from "react"

const Button = ({title})=>(
     <div>
    <button className={title.color}>{title.name}</button>
    </div>
)

export default Button;
import React from "react";

const CustomButton = (props) => {
    const {handleInput,value} = props
    return(
        <button onClick={(e) => handleInput(`${value}`)}>{value}</button>
    )
}

export default CustomButton;

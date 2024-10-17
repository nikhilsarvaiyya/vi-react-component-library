import React from 'react';
const VIButton = (props) => {
   return (
      <button className={`vi-button ${props.color || "black"} ${props.size }`}
        data-id={props.id}
        type={props.type}
        name={props.name}
        value={props.value}
        disabled={props.disabled}
        onClick={props.handleClick}> 
           <h4>{props.label || "Button"}</h4>
      </button>
   )
}
export default VIButton;
import React from 'react';
const VIBadge = (props) => {

   let count = props.count > 9 ? "9+" : props.count;

   return (
      <>
         <button className='vi-button vi-button-tip' type="button" >
            {props.label} <span>{count}</span>
         </button>
      </>
   )
}
export default VIBadge;
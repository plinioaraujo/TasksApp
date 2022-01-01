import React from 'react';

import "./Button.css";

const Button = ({children, onclick}) => {
    return (  
        <>
         <button onClick={onclick} className='add-button'>
             {children}
         </button>
        </>
    );
}
 
export default Button;
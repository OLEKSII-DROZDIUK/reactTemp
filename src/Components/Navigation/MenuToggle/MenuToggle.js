import React from 'react';
import './MenuToggle.css';

const MenuToggle = props => {

    const mainClass = props.isOpen?"fas fa-bars":"fas fa-times";

    return (   
        <i className={mainClass+" MenuToggle" }
            onClick={props.onToggle}>  
        </i>
    )
}

export default MenuToggle;
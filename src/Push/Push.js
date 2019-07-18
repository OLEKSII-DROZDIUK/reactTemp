import React, {Component} from "react";
import './push.css';

const Push = (props) => {

    return (
        <div className="push-main" style={{border:"1px solid black", width:"200px"}}>
            <h2 style={{fontSize:"25px"}}>Push tittle</h2>
            <p style={{fontSize:"18px", color:"green", padding:"5px"}}>Clicked</p>
        </div>
    )
}

export default Push;
import React from "react";
import "./ActiveQuiz.css";

const ActiveQuiz = () => {
    return(
        <div className="ActiveQuiz">
            <p className="Question">
                <span className="">
                    <strong>1.</strong>&nbsp;
                    Hello, how are you?
                </span>
                <small>3 out of 11</small>
            </p>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>

        </div>
    )
 
}

export default ActiveQuiz;
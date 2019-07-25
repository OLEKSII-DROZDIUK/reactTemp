import React, {Component} from 'react';
import './FinishedQuiz.css';

const FinishedQuiz = props => {
    return (
        <div className="FinishedQuiz" style={{textAlign:'center',color:'white',padding:"10px 0px"}}>
            <ul>
                <li>
                    <strong>
                        1.
                        <i class="fas fa-times"></i>
                    </strong>
                </li>
                <li>
                    <strong>
                        2.
                        <i class="fas fa-check"></i>
                    </strong>
                </li>
            </ul>
            <p>Correct 1 of 11</p>

            <div>
                <button onClick={() => {props.onReloadQuiz()}}>Try again</button>
            </div>
        </div>
    )
}

export default FinishedQuiz;
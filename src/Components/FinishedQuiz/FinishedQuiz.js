import React from 'react';
import './FinishedQuiz.css';
import Button from "../Ui/Button/Button";

const FinishedQuiz = props => {

    const successCout = Object.keys(props.results).reduce(function (total, key) { 
        if(props.results[key] === 'success') {
            total++;
        }
        return total;
    }, 0);

    return (
        <div className="FinishedQuiz" style={{textAlign:'center',color:'white',padding:"10px 0px"}}>
            <ul>
                { props.quiz.map((item, index) => {
                    let cls = props.results[index] === "success"?"fas fa-check":"fas fa-times";
                    return(
                        <li key={ index }> 
                            <strong>
                                { index + 1 }
                            </strong>.&nbsp;
                        { item.question }
                        <i className={cls}></i>
                        </li>
                    )
                }) }
            </ul>
            <p>Correct: {successCout} of { props.quiz.length }</p>
            <div>
                {/* <button onClick={() => {props.onReloadQuiz()}}>Try again</button> */}
                <Button 
                    onClick={() => {props.onReloadQuiz()}}
                    type="primary">
                Repead
                </Button>
                <Button 
                    type="success">
                Go to question list
                </Button>
            </div>
        </div>
    )
}

export default FinishedQuiz;
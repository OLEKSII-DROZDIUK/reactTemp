import React from 'react';
import './FinishedQuiz.css';

const FinishedQuiz = props => {

    const successCout = Object.keys(props.results).reduce(function (total, key) {  //ned fix here
        if(props.results[key] === 'seccess'){
            total++;
            console.log(total)
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
                <button onClick={() => {props.onReloadQuiz()}}>Try again</button>
            </div>
        </div>
    )
}

export default FinishedQuiz;
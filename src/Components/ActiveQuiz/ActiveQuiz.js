import React from "react";
import "./ActiveQuiz.css";
import AnswersList from './AnswersLlist/AnswersList'

const ActiveQuiz = (props) => {
    return(
        <div className="ActiveQuiz">
            <p className="Question">
                <span className="">
                    <strong>1.</strong>&nbsp;
                    {props.question}
                </span>
                <small>{props.answerNum} out of {props.quizLength}</small>
            </p>
            <AnswersList answers={ props.answers } 
            onAnswerClick={props.onAnswerClick} 
            state={props.state}/>
        </div>
    )
 
}

export default ActiveQuiz;
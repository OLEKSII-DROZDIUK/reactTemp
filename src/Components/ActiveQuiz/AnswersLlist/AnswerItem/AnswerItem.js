import React, {Component} from 'react';
import './AnswerItem.css';

const AnswerItem = props => {

   let cls = props.state;

    return (
        <li 
        className={(cls === undefined || cls === null)?"AnswerItem":"AnswerItem "+ cls}
        onClick={()=>{props.onAnswerClick(props.answer.id)}}>
            { props.answer.text }
        </li>
    )
}

export default AnswerItem;
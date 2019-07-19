import React, {Component} from 'react';
import "./Quiz.css"
import ActiveQuiz from "../../Components/ActiveQuiz/ActiveQuiz";

class Quiz extends Component {

    state = {
        quiz: [],

    }

    render() {
        return (
            <div className="Quiz">
                <div className="QuizWrapper">
                <h1>Quiz</h1>
                 <ActiveQuiz>

                 </ActiveQuiz>
                </div>  
            </div>
        )
    }
}

export default Quiz;
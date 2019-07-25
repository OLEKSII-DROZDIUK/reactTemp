import React, {Component} from 'react';
import "./Quiz.css"
import FinishedQuiz from "../../Components/FinishedQuiz/FinishedQuiz";
import ActiveQuiz from "../../Components/ActiveQuiz/ActiveQuiz";

class Quiz extends Component {

    state = {
        isFinished: true,
        activeQuestion: 0,
        answerState: null,
        quiz: [
            {
                question: "What color is the sky?",
                rightAnwerId: 1,
                id:1,
                answers: [
                    {text: "Blue", id: 1},
                    {text: "Green", id: 2},
                    {text: "White", id: 3},
                    {text: "Black", id: 4}
                ]
            },

            {
                question: "color of Jack Sparrow mark?",
                rightAnwerId: 4,
                id:2,
                answers: [
                    {text: "Blue", id: 1},
                    {text: "Green", id: 2},
                    {text: "White", id: 3},
                    {text: "Black", id: 4},
                    {text: "Orange", id: 5},
                    
                ]
            }
        ]
    }

    onAnswerClickHandler = (answerId) => {
        if(this.state.answerState){
            const key = Object.keys(this.state.answerState)[0]

            if(this.state.answerState[key] === 'success'){
                return;
            }
        }
        const question = this.state.quiz[this.state.activeQuestion];
 
        if(question.rightAnwerId === answerId){

            this.setState({
                answerState:{[answerId]: "success"}
            })

            const timeOffQuestion = window.setTimeout(() => {
                if(this.isQuizFinished()){
                    this.setState({
                        isFinished:true
                    })
    
                } else {
                    this.setState({
                        activeQuestion:question.rightAnwerId === answerId?this.state.activeQuestion +1:this.state.activeQuestion,
                        answerState: null
                    })  
                }
    
                window.clearInterval(timeOffQuestion)
            },1000)

        } else {
            this.setState({
                answerState:{[answerId]: 'error'}
            })
        }
        
    }

    isQuizFinished () {
        
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    onReloadQuizClickHandler = () => {

        if(this.state.isFinished === true) {
            this.setState({
                isFinished: false,
                activeQuestion: 0,
                answerState: null,
            })
        } else {
            return;
        }
    }

    render() {
        return (
            <div className="Quiz">
                <div className="QuizWrapper">
                <h1>Please, answer: </h1>
                    {
                        this.state.isFinished
                        ?<FinishedQuiz onReloadQuiz={this.onReloadQuizClickHandler}></FinishedQuiz>
                        :<ActiveQuiz
                            onAnswerClick={this.onAnswerClickHandler}
                            answers={this.state.quiz[this.state.activeQuestion].answers} 
                            question={ this.state.quiz[this.state.activeQuestion].question}
                            quizLength={ this.state.quiz.length}
                            answerNum={this.state.activeQuestion +1}
                            state={this.state.answerState}
                        />
                    }
                    
                </div>  
            </div>
        )
    }
}

export default Quiz;
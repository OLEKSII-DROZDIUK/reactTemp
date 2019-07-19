import React, {Component} from "react";

class Counter extends Component {

    constructor(props){
        super(props)

        this.state = {
            counter: 0,
        }
    }

    addCounter =  () => {
        this.setState({
            counter: this.state.counter +1,
        }) 
    }

    delCounter = () => {
        this.setState((prevState) => {
            return {
                counter: prevState.counter -1,
            }
        })
    }

    render() {
        
        return (
            <>
                <h2 key={"0"}>Counter {this.state.counter}</h2>
                <div key={"1"}>
                   <button style={{padding:"5px 10px", backgroundColor: "green", border:"none"}} onClick={this.addCounter}>+</button>
                   <button style={{padding:"5px 10px", backgroundColor: "red", border:"none"}} onClick={this.delCounter}>-</button>
                </div>
            </>
        )
    }
}

export default Counter;
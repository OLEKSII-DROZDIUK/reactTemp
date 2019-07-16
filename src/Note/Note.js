import React, {Component} from 'react';
import './Note.css';

class Note extends Component {

    constructor(props) {
        super(props)
    }

    componentWillReceiveProps(nextProps){
        console.log("componentWillReceiveProps", nextProps)
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate", nextProps, nextState)
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("componentWillUpdate", nextProps, nextState)
    }

    componentDidUpdate() {
        console.log("componentDidUpdate")
    }

	render(){

		return (
			<div className="Note" style={{
                cursor:"pointer",
            }}>
                <h1>{"Name of this note: " + this.props.name}</h1>
                <h3>{this.props.text}</h3>
                <input type="text" onChange={this.props.onChangeName} value={this.props.name}/>
                <button onClick={this.props.onDelete}>Del note</button>
			</div>
		);
	}
}

export default Note;

import React, {Component} from 'react';
import './Note.css';

class Note extends Component {
    super(props){
        
    }
	
	render(){

		return (
			<div className="Note">
                <h1>{Math.round(Math.random()*100) + " " + this.props.name}</h1>
                <h3>{this.props.text}</h3>
                <input type="text" onChange={this.props.onChangeName}></input>
                <button onClick={this.props.onDelete}>Del note</button>
			</div>
		);
	}
}

export default Note;

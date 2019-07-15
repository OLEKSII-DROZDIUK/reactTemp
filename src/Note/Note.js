import React, {Component} from 'react';
import './Note.css';

class Note extends Component {
    super(props){
        
    }
	
	render(){

		return (
			<div className="Note">
                <h3>{this.props.text}</h3>
				<p>{Math.round(Math.random()*100) + " " + this.props.name}</p>
                <button onClick={this.props.onChangeTittle}>click in note</button>
			</div>
		);
	}
}

export default Note;

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Note.css';
import withClass from "../hoc/withClass";

class Note extends Component {
    super(props) {

    }

	render(){

		return (
			<React.Fragment>
                <h1>{"Name of this note: " + this.props.name}</h1>
                <h3>{this.props.text}</h3>
                <input type="text" onChange={this.props.onChangeName} value={this.props.name}/>
                <button onClick={this.props.onDelete}>Del note</button>
			</React.Fragment>
		);
	}
}

Note.propTypes = {
    name: PropTypes.string,
    text: PropTypes.string,
    onChangeName: PropTypes.func,
    onDelete: PropTypes.func 
}

export default withClass(Note, "Note");

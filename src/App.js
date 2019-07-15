import React, {Component} from 'react';
import Note from "./Note/Note"
import './App.css';

class App extends Component {
	state = {
		note: [
			{name:"One", text: "lorem5"},
			{name:"two", text: "lorem5loremlorem"},
			{name:"three", text: "lorem1111111111111111111115"},
			{name:"four", text: "best text"},
		],
		pageTittle: "My react task"
	}

	changeTittleHandler = (newTittle) => {
	
		this.setState({
			pageTittle: newTittle

		})
	};

	handleInput = (event) => {
		this.setState({
			pageTittle: event.target.value

		})
	}

	render(){

		const note = this.state.note;

		return (
			<div className="App" style={{ackgroundColor: "yellow"}}>
				<h1>{this.state.pageTittle}</h1>

				<input type="text" onChange={this.handleInput.bind(this, )}></input>

				<button onClick={this.changeTittleHandler.bind(this, "change")}>Change Tittle</button>
				{ this.state.note.map((note, index) => {
					return (<Note key={index} name={note.name} text={note.text} onChangeTittle={this.changeTittleHandler.bind(this, note.name)}></Note>)
				})}
			</div>
		);
	}
}

export default App;

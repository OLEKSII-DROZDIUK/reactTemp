import React, {Component} from 'react';
import Note from "./Note/Note"
import './App.css';

class App extends Component {

	constructor(props) {
		super(props)

		this.state = {
			note: [
				{name:"One", text: "lorem5"},
				{name:"two", text: "lorem5loremlorem"},
				{name:"three", text: "lorem1111111111111111111115"},
				{name:"four", text: "best text"},
			],
			pageTittle: "My react task",
			showNote: false
		}
	}


	changeTittleHandler = (newTittle) => {
	
		this.setState({
			pageTittle: newTittle

		})
	};

	toggleNoteHandler = () => {
		this.setState({
			showNote: !this.state.showNote
		})
	}

	onChangeName = (value, index) => {
		
		const note = [...this.state.note]
		note[index].name = value

		this.setState({
			note
		})
	}

	deleteHandler = (index) => {
		let note = [...this.state.note]

		note.splice(index, 1)

		this.setState({
			note
		})
	}

	componentWillMount () {
		
	}

	componentDidMount () {
		
	}

	render(){

		return (
			<div className="App" style={{ackgroundColor: "yellow"}}>
				<h1>{this.props.tittle}</h1>

				<button className="toggle-btn" onClick={this.toggleNoteHandler}>Toggle Note</button>

				{ this.state.showNote ? this.state.note.map((note, index) => {	
					return (
					
					<Note key={index} name={note.name} text={note.text} 
					onChangeTittle={this.changeTittleHandler.bind(this, note.name)} 
					onChangeName={event => this.onChangeName(event.target.value, index)}
					onDelete={this.deleteHandler.bind(this, index)}
					/>
					)
				}):null}
			</div>
		);
	}
}

export default App;

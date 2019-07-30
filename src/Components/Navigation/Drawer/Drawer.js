import React, {Component} from 'react';
import "./Drawer.css";
import BackDrop from '../../Ui/BackDrop/BackDrop';

const links = [1, 2, 3]

class Drawer extends Component {


    renderLinks() {
        return links.map((link, index) => {
            return (
                <li 
                key={index}>
                    <a>Link: {link}</a>
                </li>
            )
        })
    }

    render() {

        const mainClass = this.props.isOpen?"drawer_close":"drawer_open";

        return (
            <React.Fragment>
                <nav className={"Drawer "+mainClass}>
                    <ul>
                        { this.renderLinks() }
                    </ul>
                </nav>
                {this.props.isOpen?null:<BackDrop onClick={this.props.onClose}/>}
            </React.Fragment>
            
        )
    }
}
export default Drawer;
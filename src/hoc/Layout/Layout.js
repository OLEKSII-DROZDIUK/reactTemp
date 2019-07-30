import React, {Component} from 'react';
import './Layout.css'
import MenuToggle from '../../Components/Navigation/MenuToggle/MenuToggle';
import Drawer from "../../Components/Navigation/Drawer/Drawer";


class Layout extends Component {

    state = {
        menu:true,
    }

    toggleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    menuCloseHandler = () => {

        this.setState({
            menu:true
        })
    }

    render() {

        return (
        <div className="Layout">
            <Drawer
            isOpen={this.state.menu}
            onClose={this.menuCloseHandler}/>
            <MenuToggle
                onToggle={this.toggleMenuHandler}
                isOpen={this.state.menu}
            />
            <main>
                {this.props.children}
            </main>
        </div>   
        )
    }
}

export default Layout;
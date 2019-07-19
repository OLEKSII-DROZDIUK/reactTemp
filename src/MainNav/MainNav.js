import React, {Component} from "react";
import { NavLink } from "react-router-dom";
import "./MainNav.css"

const MainNav = () => {
    return (
        <nav className="main-navbar">
            <ul>
                <NavLink to="/">Home</NavLink>
            </ul>
            <ul>
                <NavLink to="/counter">Counter</NavLink>
            </ul>
            <ul>
                <NavLink to="/link">Router h1</NavLink>
            </ul>
        </nav>
    )
}

export default MainNav;
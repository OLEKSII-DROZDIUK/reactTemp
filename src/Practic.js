import React, {Component} from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory';
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import Layout from "../src/hoc/Layout/Layout";
import Quiz from "./Conteiners/Quiz/Quiz";

import './Practic.css';

class Practic extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return(
            <Layout>
                <Quiz>

                </Quiz>
            </Layout>
        )
    }
}

export default Practic;
import React, {Component} from 'react';
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
import React, { Component } from 'react';
import DataService from './DataService.js';


class DataCheck extends Component {
    constructor(props) {
        super(props)
        this.state = { states: [], regions: [], pincodes: [] };
    }

    componentDidMount() {

            DataService.getAllStates().then((response) => {
            console.log("response===", response.data);
            this.setState({ states: response.data });
        })
            .catch(err => { throw err });
    }
    states() {
        return this.state.states;
    }
    render() {
        return (
            <div>

            </div>
        );
    }
}

export default new DataCheck();

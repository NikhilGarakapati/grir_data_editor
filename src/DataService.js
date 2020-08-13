import React, {Component} from 'react';
import axios from 'axios';
const API_URL = "http://localhost:5000"
class DataService extends Component {


    getAllStates() {
        return axios.get(`${API_URL}/statedata`)
    }
    getAllRegions(state) {
        return axios.get(`${API_URL}/regiondata/${state}`)
    }
    getAllPincodes(region) {
        return axios.get(`${API_URL}/pincodedata/${region}`)
    }
}

export default new DataService();
import React, { Component } from 'react';
import ListView from '../presentational/ListView';
import './Dashboard.scss';
import { getAirportDetails } from '../../repos/AirportDetailsRepo';
import Pagination from 'react-bootstrap/Pagination';


export default class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            airports: [],
        };
    }

    componentDidMount() {
        getAirportDetails()
            .then((response) => {
                this.setState({
                    airports: response.data,
                });
            })
            .catch((err) => {
                console.error('Airport details: failed to load data', err);
            });
    }

    render() {
        const { airports } = this.state;
        return (
            <div className="container">
                <header>Airport Inspector</header>
                <ListView airports={airports} />
            </div>
        );
    }
}

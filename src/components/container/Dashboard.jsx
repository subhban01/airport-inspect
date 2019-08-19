import React, { Component } from 'react';
import ListContainer from './ListContainer';
import SpinnerComp from '../presentational/SpinnerComp';
import './Dashboard.scss';
import { getAirportDetails } from '../../repos/AirportDetailsRepo';


export default class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            airports: [],
            fetching: true,
        };
    }

    componentDidMount() {
        getAirportDetails()
            .then((response) => {
                this.setState({
                    airports: response.data,
                    fetching: false,
                });
            })
            .catch((err) => {
                console.error('Airport details: failed to load data', err);
            });
    }

    render() {
        const {
            airports, fetching,
        } = this.state;
        return (
            <div className="container">
                <header>Airport Viewer</header>
                {
                    fetching
                        ? (
                            <SpinnerComp />
                        )
                        : (
                            <ListContainer airports={airports} />
                        )
                }
            </div>
        );
    }
}

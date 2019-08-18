import React, { Component } from 'react';
import ListView from '../presentational/ListView';
import './Dashboard.scss';
import { getAirportDetails } from '../../repos/AirportDetailsRepo';
import { Pagination, Spinner } from 'react-bootstrap';


export default class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            airports: [],
            fetching: true,
            active: 1,
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
        const { airports, fetching } = this.state;
        return (
            <div className="container">
                <header>Airport Inspector</header>
                {
                    fetching
                        ? (
                            <Spinner animation="border" role="status" variant="danger" size="sm">
                                <span className="sr-only">Loading...</span>
                            </Spinner>
                        )
                        : (
                            <React.Fragment>
                                <ListView airports={airports} />
                                <Pagination>
                                    <Pagination.Item>{10}</Pagination.Item>
                                    <Pagination.Item>{11}</Pagination.Item>
                                    <Pagination.Ellipsis />
                                </Pagination>
                            </React.Fragment>
                        )
                }
            </div>
        );
    }
}

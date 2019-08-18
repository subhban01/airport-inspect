import React, { Component } from 'react';
import ListView from '../presentational/ListView';
import Pagination from 'react-js-pagination';
import {ITEMS_PER_PAGE, PAGE_RANGE_DISPLAYED} from '../../constants/Constants';


export default class ListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage: 1,
            totalCount: this.props.airports.length,
            start: 0,
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.airports !== prevProps.airports) {
            this.setState({
                airports: this.props.airports,
                totalCount: this.props.airports.length
            });
        }
    }

    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
    }

    render() {
        let {
            activePage, totalCount, start,
        } = this.state;
        let { airports } = this.props;

        return (
            <React.Fragment>
                {
                    airports && airports.length > 0
                    && airports.map((airport, index) => {
                        if (index > start && index <= (start + ITEMS_PER_PAGE - 1)) {
                            return (
                                <ListView
                                    airport={airport}
                                    key={airport.airportName + airport.location.latitude + airport.location.longitude}
                                />
                            );
                        }
                    })
                }
                <Pagination
                    itemsCountPerPage={ITEMS_PER_PAGE}
                    totalItemsCount={totalCount}
                    onChange={this.handlePageChange.bind(this)}
                    activePage={activePage}
                    pageRangeDisplayed={PAGE_RANGE_DISPLAYED}
                />
            </React.Fragment>
        );
    }
}

import React, { Component } from 'react';
import Pagination from 'react-js-pagination';
import ListView from '../presentational/ListView';
import { ITEMS_PER_PAGE, PAGE_RANGE_DISPLAYED } from '../../constants/Constants';
import './ListContainer.scss';
import DetailsModal from '../presentational/DetailsModal';


export default class ListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage: 1,
            totalCount: this.props.airports.length || 0,
            start: 0,
            isOpen: false,
            openModalIndex: 0,
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.airports !== prevProps.airports) {
            this.setState({
                airports: this.props.airports,
                totalCount: this.props.airports.length,
            });
        }
    }

    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({
            activePage: pageNumber,
            start: (pageNumber - 1) * ITEMS_PER_PAGE,
        });
    }

    openModal(index) {
        this.setState({
            isOpen: true,
            openModalIndex: index,
        });
    }

    hideModal = () => {
        this.setState({
            isOpen: false,
        });
    }

    render() {
        const {
            activePage, totalCount, start, isOpen, openModalIndex,
        } = this.state;
        const { airports } = this.props;

        return (
            <React.Fragment>
                <DetailsModal
                    show={isOpen}
                    onHide={this.hideModal}
                    airport={airports[openModalIndex]}
                />

                {
                    airports && airports.length > 0
                    && airports.map((airport, index) => {
                        if (index >= start && index <= (start + ITEMS_PER_PAGE - 1)) {
                            return (
                                <ListView
                                    airport={airport}
                                    index={index}
                                    key={airport.airportName + airport.location.latitude + airport.location.longitude}
                                    openModal={this.openModal.bind(this)}
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

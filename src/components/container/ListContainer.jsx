import React, { Component } from 'react';
import Pagination from 'react-js-pagination';
import PropTypes from 'prop-types';
import ListView from '../presentational/ListView';
import { ITEMS_PER_PAGE, PAGE_RANGE_DISPLAYED } from '../../constants/Constants';
import './ListContainer.scss';
import DetailsModal from '../presentational/DetailsModal';


export default class ListContainer extends Component {
    constructor(props) {
        super(props);
        const { airports } = this.props;
        this.state = {
            activePage: 1,
            totalCount: airports.length || 0,
            start: 0,
            isOpen: false,
            openModalIndex: 0,
        };
    }

    componentDidUpdate(prevProps) {
        const { airports } = this.props;
        if (airports !== prevProps.airports) {
            this.setState({
                totalCount: airports.length,
            });
        }
    }

    hideModal = () => {
        this.setState({
            isOpen: false,
        });
    }

    openModal = (index) => {
        this.setState({
            isOpen: true,
            openModalIndex: index,
        });
    }

    handlePageChange = (pageNumber) => {
        this.setState({
            activePage: pageNumber,
            start: (pageNumber - 1) * ITEMS_PER_PAGE,
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
                                    openModal={this.openModal}
                                />
                            );
                        }
                    })
                }
                <Pagination
                    itemsCountPerPage={ITEMS_PER_PAGE}
                    totalItemsCount={totalCount}
                    onChange={this.handlePageChange}
                    activePage={activePage}
                    pageRangeDisplayed={PAGE_RANGE_DISPLAYED}
                />
            </React.Fragment>
        );
    }
}

ListContainer.propTypes = {
    airports: PropTypes.array.isRequired,
};

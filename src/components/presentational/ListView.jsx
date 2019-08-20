import React, { Component } from 'react';
import './ListView.scss';
import PropTypes from 'prop-types';


export default class ListView extends Component {
    openModal = () => {
        const { openModal, index } = this.props;
        openModal(index);
    }

    render() {
        const { airport } = this.props;
        let { airportName, airportCode } = airport;
        const { city, country } = airport;
        let { cityName } = city;
        let { countryName } = country;
        airportName = airportName || 'N/A';
        airportCode = airportCode || 'N/A';
        cityName = cityName || 'N/A';
        countryName = countryName || 'N/A';

        return (
            <div className="listview-container">
                <div className="text-col">
                    <div>
                        <strong>{`${airportName}  (${airportCode})`}</strong>
                    </div>
                    <div>
                        {`${cityName},  ${countryName}`}
                    </div>
                </div>
                <div className="button-col" onClick={this.openModal}>Details</div>
            </div>
        );
    }
}

ListView.propTypes = {
    openModal: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    airport: PropTypes.object.isRequired,
};

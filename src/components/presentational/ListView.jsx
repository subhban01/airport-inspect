import React, { Component } from 'react';
import './ListView.scss';


export default class ListView extends Component {
    constructor(props) {
        super(props);
    }

    openModal = () => {
        this.props.openModal(this.props.index);
    }

    render() {
        let { airportName, airportCode } = this.props.airport;
        let { cityName } = this.props.airport.city;
        let { countryName } = this.props.airport.country;
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

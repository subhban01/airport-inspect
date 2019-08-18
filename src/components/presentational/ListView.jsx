import React from 'react';
import './ListView.scss';


export default function ListView(props) {
    const airportName = props.airport.airportName ? props.airport.airportName : 'N/A';
    const airportCode = props.airport.airportCode ? props.airport.airportCode : 'N/A';
    const cityName = props.airport.city.cityName ? props.airport.city.cityName : 'N/A';
    const countryName = props.airport.country.countryName ? props.airport.country.countryName : 'N/A';

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
            <div className="button-col">
                {' '}
Details
            </div>
        </div>
    );
}

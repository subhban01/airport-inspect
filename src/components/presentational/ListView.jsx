import React, { Component } from 'react';
import './ListView.scss';


export default function ListView(props) {
    return (
        <div className="listview-container">
            <div className="text-col">
                {`${props.airport.airportName}  (${props.airport.airportCode}) / `}
                <strong>{`${props.airport.city.cityName},  ${props.airport.country.countryName}`}</strong>
            </div>
            <div className="button-col"> Details
            </div>
        </div>
    );
}

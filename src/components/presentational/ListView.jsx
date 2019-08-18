import React, { Component } from 'react';
import './ListView.scss';


export default function ListView(props) {
    return (
        <div className="listview-container">
            {props.airport.airportName}
        </div>
    );
}

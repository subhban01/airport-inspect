import React, { Component } from 'react';
import './ListView.scss';


export default function ListView(props) {
    return (
        <div className="listview-container">
            { props.airports && props.airports.length > 0
             && props.airports.map((airport, index) => (
                 <div key={airport.airportName + airport.location.latitude + airport.location.longitude}>
                     {airport.airportName}
                 </div>
             ))
            }
        </div>
    );
}

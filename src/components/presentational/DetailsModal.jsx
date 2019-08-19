import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './DetailsModal.scss';


export default function DetailsModal(props) {
    const { airportCode, airportName } = props.airport;
    const { cityName, timeZoneName } = props.airport.city;
    const { countryName, countryCode } = props.airport.country;
    const { regionName } = props.airport.region;
    const {
        latitude, longitude, aboveSeaLevel, latitudeDirection, longitudeDirection,
    } = props.airport.location;


    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="Airport details modal"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>
          Airport Details
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ul>
                    <li>
Airport Name:&nbsp;
                        <strong>{airportName || 'N/A'}</strong>
                    </li>
                    <li>
Airport Code:&nbsp;
                        <strong>{airportCode || 'N/A'}</strong>
                    </li>
                    <li>
City:&nbsp;
                        <strong>{cityName || 'N/A'}</strong>
                    </li>
                    <li>
Coordinates:&nbsp;
                        <strong>
                            {latitude}
                            {' '}
&deg;
                            {' '}
                            {latitudeDirection}
,
                            {' '}
                            {longitude}
                            {' '}
&deg;
                            {' '}
                            {longitudeDirection}
                        </strong>
                    </li>
                    <li>
Above Sea Level:&nbsp;
                        <strong>{aboveSeaLevel || 'N/A'}</strong>
                    </li>
                    <li>
Time Zone:&nbsp;
                        <strong>{timeZoneName || 'N/A'}</strong>
                    </li>
                    <li>
Country:&nbsp;
                        <strong>{countryName || 'N/A'}</strong>
                    </li>
                    <li>
Country Code:&nbsp;
                        <strong>{countryCode || 'N/A'}</strong>
                    </li>
                    <li>
Region:&nbsp;
                        <strong>{regionName || 'N/A'}</strong>
                    </li>
                </ul>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Back</Button>
            </Modal.Footer>
        </Modal>
    );
}

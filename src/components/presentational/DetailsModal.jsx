import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './DetailsModal.scss';


export default function DetailsModal(props) {
    const { airportCode, eticketableAirport, airportName } = props.airport;
    const { cityCode, cityName, timeZoneName } = props.airport.city;
    const { countryName, countryCode } = props.airport.country;
    const { regionName } = props.airport.region;


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
airportCode:
                        <strong>{airportCode}</strong>
                    </li>
                    <li>
eticketableAirport:
                        <strong>{eticketableAirport}</strong>
                    </li>
                    <li>
airportName:
                        <strong>{airportName}</strong>
                    </li>
                    <li>
cityName:
                        <strong>{cityName}</strong>
                    </li>
                    <li>
timeZoneName:
                        <strong>{timeZoneName}</strong>
                    </li>
                    <li>
countryName:
                        <strong>{countryName}</strong>
                    </li>
                    <li>
countryCode:
                        <strong>{countryCode}</strong>
                    </li>
                    <li>
regionName:
                        <strong>{regionName}</strong>
                    </li>
                </ul>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Back</Button>
            </Modal.Footer>
        </Modal>
    );
}

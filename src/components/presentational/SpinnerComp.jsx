import React, { Component } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import './SpinnerComp.scss';


export default function SpinnerComp(props) {
    return (
        <Spinner animation="border" role="status" variant="danger" size="sm">
            <span className="sr-only">Loading...</span>
        </Spinner>
    );
}

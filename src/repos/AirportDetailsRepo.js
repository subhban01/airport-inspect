import http from 'axios';
import {
    baseURI,
} from '../constants/Constants';


export function getAirportDetails() {
    return http.get(baseURI);
}

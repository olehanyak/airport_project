
import { fetchFlights } from "./flight.gateway";

export const FLIGHTS_LIST = "AIRPORT/FLIGHTS_LIST";

export const flightsList = (dataList, date) => {
    return {
        type: FLIGHTS_LIST,
        payload: { dataList, date },
    };
};

export const fetchFlightsList = (date) => {
    const thunkAction = (dispatch) => {
        fetchFlights(date).then((dataList) => {
            dispatch(flightsList(dataList, date));
        });
    };
    return thunkAction;
};
import React, { useState } from "react";
import { connect } from "react-redux";
import qs from "qs";
import { dateSelector } from "../redux/flight.selectors";
import { useLocation, useHistory } from "react-router-dom";

const SearchFlights = ({ date }) => {
    const [inputValue, setInputValue] = useState("");
    const location = useLocation();
    const history = useHistory();

    const onSearch = (event) => {
        event.preventDefault();
        let dataQuery = {
            search: inputValue,
            date,
        };

        let pathname = "";
        if (location.pathname === "/") {
            pathname = "/departures?";
        } else {
            dataQuery = {
                ...dataQuery,
                ...qs.parse(location.search, { ignoreQueryPrefix: true }),
                search: inputValue,
            };
            pathname = location.pathname + "?";
        }
        const queryString = qs.stringify(dataQuery);
        history.push(`${pathname}${queryString}`);
    };

    return (
        <div className="search-block">
            <h1 className="search-block__title">Search flight</h1>
            <form className="search-block__form" onSubmit={onSearch}>
                <i className="fas fa-search"></i>
                <input
                    className="search-block__input"
                    type="text"
                    placeholder="Airline, destination or flight #"
                    value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)}
                />
                <button className="search-block__btn">Search</button>
            </form>
        </div>
    );
};

const mapState = (state) => {
    return {
        date: dateSelector(state),
    };
};

export default connect(mapState)(SearchFlights);

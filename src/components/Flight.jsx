import React from "react";
import moment from "moment";

const Flight = (props) => {
  const { term, fltNo, status, name, logoUrl, airportName, localTime } = props;
  const timetable = moment(localTime).format("HH:mm");

  return (
    <tr>
      <td>
        <span className={term === "D" ? "terminal blue" : "terminal"}>{term}</span>
      </td>
      <td>{timetable}</td>
      <td>
        <span>{airportName}</span>
      </td>
      <td>
        <span>{status}</span>
      </td>
      <td>
        <span className="logo-company">
          <img src={logoUrl} alt={name} />
          <span>{name}</span>
        </span>
      </td>
      <td>
        <span>{`${fltNo}`}</span>
      </td>
      <td>
        <i className="fas fa-chevron-right"></i>
      </td>
    </tr>
  );
};

export default Flight;

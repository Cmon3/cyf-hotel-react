import React, { useState } from "react";
//import moment from "moment";

function SearchResultItem(props) {
  const [activeRow, setActiveRow] = useState("");

  const highlightRow = () => {
    if (activeRow == "") {
      setActiveRow("table-primary");
    } else {
      setActiveRow("");
    }
  };

  return (
    <tr onClick={highlightRow} className={activeRow}>
      <td>{props.roomId}</td>
      <td>{props.title}</td>
      <td>{props.firstName}</td>
      <td>{props.surname}</td>
      <td>{props.email}</td>
      <td>{props.roomId}</td>
      <td>{props.checkInDate}</td>
      <td>{props.checkOutDate}</td>
      <td>{props.total_nights}</td>
    </tr>
  );
}

export default function SearchResults(props) {
  return props.results.length > 0 ? (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">title</th>
          <th scope="col">first name</th>
          <th scope="col">surname</th>
          <th scope="col">email</th>
          <th scope="col">room id</th>
          <th scope="col">check in date</th>
          <th scope="col">check out date</th>
          <th scope="col">total nights</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map(customer => (
          <SearchResultItem key={customer} {...customer} />
        ))}
      </tbody>
    </table>
  ) : (
    <div>No results found.</div>
  );
}

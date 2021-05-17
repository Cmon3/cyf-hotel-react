import React, { useState } from "react";
//import CustomerProfile from "./CustomerProfile";

function SearchResultItem(props) {
  const [activeRow, setActiveRow] = useState("");

  const highlightRow = () => {
    if (activeRow == "") {
      setActiveRow("table-primary");
    } else {
      setActiveRow("");
    }
  };

  /*const handleId = () => {
    getCustomerId(props.id)
  };*/

  return (
    <tr onClick={highlightRow} className={activeRow}>
      <td>{props.id}</td>
      <td>{props.title}</td>
      <td>{props.firstName}</td>
      <td>{props.surname}</td>
      <td>{props.email}</td>
      <td>{props.roomId}</td>
      <td>{props.checkInDate}</td>
      <td>{props.checkOutDate}</td>
      <td>{props.total_nights}</td>
      <td>
        <button className="btn btn-secondary btn-sm">show profile</button>
      </td>
    </tr>
  );
}

export default function SearchResults(props) {
  /*const [customerId, setCustomerId] = useState(null);
  const getCustomerId = (id) => {
      console.log(id)
  }*/

  return props.results.length > 0 ? (
    <div>
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
            <th scope="col">show profile</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map(customer => (
            <SearchResultItem key={customer} {...customer} />
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <div>No results found.</div>
  );
}

//onClick={handleId}
//<CustomerProfile customer={props.customer} customerId={getCustomerId}/>

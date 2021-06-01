import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
//import FakeBookings from "./data/fakeBookings.json";
import { parse, differenceInDays } from "date-fns";

const Bookings = () => {
  const [searchValue, setSearchValue] = useState("");
  const [bookings, setBookings] = useState([]);

  const search = value => setSearchValue(value.toLowerCase());

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me`)
      .then(res => res.json())
      .then(data => {
        setBookings(data);
      });
  }, []);

  const filterBookings = () => {
    return bookings
      .filter(({ firstName, surname }) =>
        `${firstName} ${surname}`.toLowerCase().includes(searchValue)
      )
      .map(customer => {
        const { checkInDate, checkOutDate } = customer;
        const inDate = parse(checkInDate, "yyyy-MM-dd", new Date());
        const outDate = parse(checkOutDate, "yyyy-MM-dd", new Date());
        customer.total_nights = differenceInDays(outDate, inDate);
        return customer;
      });
  };

  const filteredResult = searchValue ? filterBookings() : [];

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {<SearchResults results={filteredResult} />}
      </div>
    </div>
  );
};

export default Bookings;

import React, { useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";
//import { parse, differenceInDays } from "date-fns"

const Bookings = () => {
  const [searchValue, setSearchValue] = useState("");

  const search = value => setSearchValue(value.toLowerCase());

  const [bookings, setBookings] = useState(FakeBookings);

  const filterBookings = () => {
    return bookings
      .filter(({ firstName, surname }) =>
        `${firstName} ${surname}`.toLowerCase().includes(searchValue)
      )
      .map(customer => {
        const { checkInDate, checkOutDate } = customer;
        //const in = parse("yyyy-MM-dd", checkInDate)
        //const out = parse("yyyy-MM-dd", checkOutDate)
        //customer.total_nights = differenceInDays(in, out)
        customer.total_nights = 4;
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

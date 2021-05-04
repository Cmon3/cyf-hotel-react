import React, { useState } from "react";
import SearchButton from "./SearchButton";

const Search = props => {
  const [value, setValue] = useState("");

  const handleInput = event => {
    const inputValue = event.target.value;
    setValue(inputValue);
  };

  const handleSearch = event => {
    event.preventDefault();
    props.search(value);
  };

  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box">
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                value={value}
                onChange={handleInput}
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer name"
              />
              <SearchButton onSearch={handleSearch} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;

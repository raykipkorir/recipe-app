import React, { useState, useRef, useEffect } from "react";

function SearchBar({ getSearchData, isLoading }) {
  const [searchInput, setSearchInput] = useState("");

  const inputElement = useRef();

  useEffect(() => {
    inputElement.current.focus();
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    getSearchData(searchInput);
    setSearchInput("");
  };

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className="row m-5">
      <div className="col-md-5 offset-md-3">
        <form
          onSubmit={handleSearchSubmit}
          className="d-flex align-items-center justify-content-center gap-2"
        >
          <input
            type="search"
            placeholder="Search recipe"
            value={searchInput}
            onChange={handleSearchChange}
            ref={inputElement}
            className="rounded-pill ps-4 pe-4 pt-2 pb-2"
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-warning rounded-pill"
            disabled={isLoading}
          />
        </form>
      </div>
    </div>
  );
}

export default SearchBar;

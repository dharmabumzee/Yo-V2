import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    onFormSubmit(term);
  };
  return (
    <div className="search-bar ui segment fluid">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>NASA Image Library</label>
          <input
            type="text"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
            onClick={() => setTerm("")}
            placeholder="Search..."
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;

import React from "react";

const SearchBar = ({ onSearch }) => {
  return (
    <div className="note-search">
      <input type="text" placeholder="Cari catatan..." onChange={onSearch} />
    </div>
  );
};

export default SearchBar;

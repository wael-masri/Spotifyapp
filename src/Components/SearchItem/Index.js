import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Style.css";
const SearchItem = ({ setArtistname }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Search for an artist..."
        onChange={(e) => setArtistname(e.target.value)}
        className="searchinput"
      />
      <SearchIcon className="buttonsearch" />
    </>
  );
};

export default SearchItem;

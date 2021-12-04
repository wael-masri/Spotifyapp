import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Style.css";
const SearchItem = ({ setArtistname, getDataSearching }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Search for an artist..."
        onChange={(e) => setArtistname(e.target.value)}
        className="searchinput"
      />
      <SearchIcon onClick={() => getDataSearching()} className="buttonsearch" />
    </>
  );
};

export default SearchItem;

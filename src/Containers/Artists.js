import React, { useState } from "react";
import axios from "axios";
import Carditem from "../Components/Card/Index";
import SearchItem from "../Components/SearchItem/Index";

const Artists = () => {
  const [artistname, setArtistname] = useState("");
  const [listdata, setListdata] = useState([]);

  const getDataSearching = async () => {
    if (artistname !== "") {
      const newAccessToken = await localStorage.getItem("tokenurl");
      const res = await axios.get(
        `https://api.spotify.com/v1/search?q=${artistname}&type=artist`,
        {
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + newAccessToken,
            "Content-Type": "application/json",
          },
        }
      );
      res && setListdata(res.data.artists.items);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center mt-5 mb-4">
          <SearchItem
            setArtistname={setArtistname}
            getDataSearching={getDataSearching}
          />
        </div>
        {listdata &&
          listdata.map((item, index) => {
            return (
              <div className="col-md-3 mt-4 mb-4" key={index}>
                <Carditem itemartists={item} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Artists;

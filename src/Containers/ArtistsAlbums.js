import React, { useEffect, useState } from "react";
import "./Styles.css";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Carditem from "../Components/Card/Index";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const ArtistsAlbums = () => {
  const location = useLocation();
  const id = location.state.id;
  const [listdataalbums, setListdataalbums] = useState([]);

  useEffect(() => {
    const getDataAlbums = async () => {
      if (id) {
        const newAccessToken = localStorage.getItem("tokenurl");
        const res = await axios.get(
          `https://api.spotify.com/v1/artists/${id}/albums`,
          {
            headers: {
              Accept: "application/json",
              Authorization: "Bearer " + newAccessToken,
              "Content-Type": "application/json",
            },
          }
        );
        res && setListdataalbums(res.data.items);
      }
    };
    getDataAlbums();
  }, [id]);

  //RUNNING
  return (
    <div className="container">
      {listdataalbums && (
        <div className="row">
          <div className="col-md-12">
            <h3 className="globaltitle mt-5">{location.state.name}</h3>
            <h4 className="subtitle">Albums</h4>
          </div>
          {listdataalbums.map((item, index) => {
            return (
              <div className="col-md-3 mt-4 mb-4" key={index}>
                <Carditem itemalbums={item} />
              </div>
            );
          })}
        </div>
      )}
      {listdataalbums.length === 0 && (
        <Box sx={{ display: "flex" }} className="circular">
          <CircularProgress />
        </Box>
      )}
    </div>
  );
};

export default ArtistsAlbums;

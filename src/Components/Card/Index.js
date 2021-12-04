import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import "./Style.css";
import { Link } from "react-router-dom";
import img from "../../Images/noimage.jpg";
const Carditem = ({ itemartists, itemalbums }) => {
  return (
    <>
      {itemartists && (
        <Link to="/artistsalbums" className="wraplink_card" state={itemartists}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="180"
              image={
                itemartists?.images && itemartists?.images[1] ? itemartists?.images[1].url : img
              }
              alt="green iguana"
            />

            <CardContent className="card_title">
              <Typography gutterBottom variant="h5" component="div">
                {itemartists?.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {itemartists?.followers.total} followers
              </Typography>
            </CardContent>
            <CardActions>
              <Rating name="no-value" value={(itemartists?.popularity * 5) / 100} />
            </CardActions>
          </Card>
        </Link>
      )}
      {itemalbums && (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="180"
            image={
              itemalbums?.images &&
              itemalbums?.images[1] &&
              itemalbums?.images[1].url
            }
            alt="green iguana"
          />

          <CardContent className="card_title2">
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="title_card2"
            >
              {itemalbums?.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {itemalbums?.artists[0].name}
            </Typography>
          </CardContent>
          <div className="boxdate_track">
            <CardActions className="innerdate_track">
              <div>{itemalbums?.release_date}</div>
            </CardActions>
            <CardActions className="innerdate_track">
              <div>{itemalbums?.total_tracks} Tracks</div>
            </CardActions>
            <CardActions>
              <a
                href={itemalbums?.external_urls.spotify}
                className="href_buttoncard2"
              >
                {" "}
                <button className="btn form-control btn_card2">
                  Preview on Spotify
                </button>{" "}
              </a>
            </CardActions>
          </div>
        </Card>
      )}
    </>
  );
};

export default Carditem;

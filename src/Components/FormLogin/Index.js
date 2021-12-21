import React from "react";
import "./Style.css";
import logospotify from "../../Images/logospotify.png";
import { URL_AUTH } from "../../Spotify/Index";

const FormLogin = () => {
  return (
    <div className="login_container">
      <button className="btn btn_Login">
        <a  className="linkhreflogin" href={URL_AUTH}>
          Login
          <img src={logospotify} alt="artist" className="spotify_logo" />
        </a>
      </button>
    </div>
  );
};

export default FormLogin;

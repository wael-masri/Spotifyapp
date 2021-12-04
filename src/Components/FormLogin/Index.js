import React from "react";
import "./Style.css";
import logospotify from "../../Images/logospotify.png";
import { URL_AUTH } from "../../Spotify/Index";

const FormLogin = () => {
  return (
    <div className="login_container">
      <button className="btn btn_Login">
        <a href={URL_AUTH} className="linkhreflogin">
          Login
          <img src={logospotify} className="spotify_logo" />
        </a>
      </button>
    </div>
  );
};

export default FormLogin;

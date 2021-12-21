import React, {useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import Artists from "./Containers/Artists";
import ArtistsAlbums from "./Containers/ArtistsAlbums";
import Login from "./Containers/Login";
//Components
import Header from "./Components/Header/Index";
import { getTokenFromUrl } from "./Spotify/Index";
import { isLogin, login } from "./Utils/Tools";

function App() {
  const [token, setToken] = useState(null)
  useEffect(() => {

    const hash = getTokenFromUrl();
    window.location.hash = "";
    const tokenurl = hash.access_token;
    if (tokenurl) {
      setToken(tokenurl);
      localStorage.setItem("tokenurl", tokenurl);
      login();
    }
  }, [token]);

  const publicRoute = () => {
    return (
      <>
        <Route path="/" element={<Login />} />
      </>
    );
  };

  const privateRoute = () => {
    return (
      <>
        <Route path="/" element={<Artists />} />
        <Route path="artistsalbums" element={<ArtistsAlbums />} />
      </>
    );
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>{isLogin() ? privateRoute() : publicRoute()}</Routes>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { isLogin } from "../../Utils/Tools";
import "./Style.css";
const Header = () => {
  const navigate = useNavigate();

  const handlelogout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };

  return (
    <nav className="navbar navbar_custom">
      <div className="container">
        <Link className="navbar-brand" to="#" className="inner_nav_text">
          Spotify Artist Search
        </Link>
        {isLogin() && (
          <button className="btn btn_logout" onClick={() => handlelogout()}>
            Log Out
          </button>
        )}
      </div>
    </nav>
  );
};

export default Header;

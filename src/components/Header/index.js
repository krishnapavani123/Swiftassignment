// File: src/components/Header.jsx

import { Link } from "react-router-dom";
import "./index.css";

const Header = () => {
  return (
    <div className="main-header">
      <div className="logo-wrapper">
        <span className="logo-square">S</span>
        <span className="logo-text">WIFT</span>
      </div>

      <Link to="/profile" className="profile-info">
      <div className="top">
        <div className="profile-circle">EH</div>
        <span className="profile-name">Ervin Howell</span>
        </div>
      </Link>
    </div>
  );
};

export default Header;

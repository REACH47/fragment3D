import React from "react";
import "./Header.scss";

function Header(props) {
  return (
    <div>
      <h1 className="header">{props.title}</h1>
    </div>
  );
}

export default Header;

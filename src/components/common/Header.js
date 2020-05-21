import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const activestyle = { color: "Red" };
  return (
    <div>
      <NavLink activeStyle={activestyle} to="/" exact>
        Home
      </NavLink>
      {" | "}
      <NavLink activeStyle={activestyle} exact to="/about">
        About
      </NavLink>
    </div>
  );
}

import { Component } from "react";
import "./menu.styles.css";
import { NavLink } from "react-router-dom";
 
class Menu extends Component {
  render() {
    return (
      <nav className="lime accent-3">
        <div className="nav-wrapper">
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "link")}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/notes"
                className={({ isActive }) => (isActive ? "active" : "link")}
              >
                Notes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/todo"
                className={({ isActive }) => (isActive ? "active" : "link")}
              >
                Todo
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Menu;

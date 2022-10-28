import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <>
      <ul className="nav d-flex justify-content-between shadow-sm mb-2 sticky-top bg-light">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            Mermaid
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            Login
          </NavLink>
        </li>
      </ul>
    </>
  );
}
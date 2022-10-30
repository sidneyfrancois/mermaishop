import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/auth";
import { useNavigate } from "react-router-dom";

export default function Menu() {
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();

  function logout() {
    setAuth({ ...auth, user: null, token: "" });
    localStorage.removeItem("auth");
    navigate("/");
  }

  return (
    <>
      <ul className="nav d-flex justify-content-between shadow-sm mb-2 sticky-top bg-light">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            Mermaid
          </NavLink>
        </li>
        <li className="nav-item mt-1">
          <NavLink className="nav-link" to="/cart">
            CART
          </NavLink>
        </li>

        {!auth?.user ? (
          <>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/register">
                Register
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <div className="dropdown">
              <li>
                <a
                  data-bs-toggle="dropdown"
                  className="nav-link pointer dropdown-toggle"
                >
                  {auth?.user?.name?.toUpperCase()}
                </a>

                <ul className="dropdown-menu">
                  <li className="nav-item pointer">
                    <a className="nav-link" onClick={logout}>
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
            </div>
          </>
        )}
      </ul>
    </>
  );
}

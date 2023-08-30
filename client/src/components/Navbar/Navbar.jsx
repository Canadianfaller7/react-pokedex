import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = ({ currentPage, handlePageChange }) => {
  return (
    <>
      <nav className='navbar'>
        <div className='navContainer'>
          <div className='homeBtn'>
            <NavLink exact
              to='/'
              onClick={() => handlePageChange("Home")}
              className={currentPage === "Home" ? "nav-link active" : "nav-link"}
            >
              Home
            </NavLink>
          </div>
          <ul className='navMenu'>
            <li>
              <NavLink
                to='/search'
                onClick={() => handlePageChange("Search")}
                className={currentPage === "Search" ? "nav-link active" : "nav-link"}
              >
                Search
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/details'
                onClick={() => handlePageChange("Pokemon Details")}
                className={currentPage === "Pokemon Details" ? "nav-link active" : "nav-link"}
              >
                Details
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

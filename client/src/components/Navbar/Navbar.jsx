import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = ({ currentPage, handlePageChange }) => {
  return (
    <>
      <nav className='navbar'>
        <div className='navContainer'>
          <div className='homeBtn'>
            <Link
              to='/'
              onClick={() => handlePageChange("Home")}
              className={currentPage === "Home" ? "nav-link active" : "nav-link"}
            >
              Home
            </Link>
          </div>
          <ul className='navMenu'>
            <li>
              <Link
                to='/search'
                onClick={() => handlePageChange("Search")}
                className={currentPage === "Search" ? "nav-link active" : "nav-link"}
              >
                Search
              </Link>
            </li>
            <li>
              <Link
                to='/details'
                onClick={() => handlePageChange("Pokemon Details")}
                className={currentPage === "Pokemon Details" ? "nav-link active" : "nav-link"}
              >
                Details
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

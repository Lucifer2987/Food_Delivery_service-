import { Link } from "react-router-dom";
import "../styles/navbar.css"; // Import Navbar styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>🍕 Foodie Express</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add-restaurant">Add Restaurant</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/LOGO.png";

export const Navbar = () => {
  return (
    <div className="px-10 bg-yellow-800 flex items-center justify-between">
      <div className="h-16 w-16 flex justify-center items-center">
        <img src={logo} alt="" />
      </div>
      <div className="nav">
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          HOME
        </Link>
        <Link to="/About" style={{ textDecoration: "none", color: "white" }}>
          ABOUT
        </Link>
        <Link to="/Services" style={{ textDecoration: "none", color: "white" }}>
          SERVICES
        </Link>
        <Link to="/Shop" style={{ textDecoration: "none", color: "white" }}>
          SHOP
        </Link>
        <Link to="Contacts" style={{ textDecoration: "none", color: "white" }}>
          CONTACTS
        </Link>
      </div>
      <div>
        <FaShoppingCart className="text-white text-2xl" />
      </div>
    </div>
  );
};

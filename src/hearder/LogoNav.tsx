import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const LogoNav = () => (
  <Link to="/" aria-label="Accueil">
    <img src={logo} alt="The Travel Blog" className="h-10 w-10 object-contain" />
  </Link>
);

export default LogoNav;

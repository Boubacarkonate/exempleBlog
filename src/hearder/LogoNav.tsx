import React from "react";
import logo from "../assets/logo.png";
type LogoProps = {
  logoName: string;
};
const LogoNav: React.FC<LogoProps> = ({ logoName }) => {
  return (
    <div className="size-24 rounded-full">
      <a href="#home" aria-label={`Navigate to ${logoName}`}>
        <img src={logo} alt={logoName} className="object-contain" />
      </a>
    </div>
  );
};

export default LogoNav;

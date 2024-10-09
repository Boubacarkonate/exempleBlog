import React from "react";
import LogoNav from "./LogoNav";

interface NavBarComponent {
  home: string;
  about: string;
  card: string;
  contact: string;
}

const NavBar: React.FC<NavBarComponent> = ({ home, about, card, contact }) => {
  return (
    <div className="fixed inset-x-0 top-0 z-10 flex w-full flex-row">
      <div>
        <LogoNav logoName="logo" />
      </div>
      <ul className="flex w-full flex-wrap items-center justify-center gap-2 scroll-smooth bg-amber-200 p-4 text-lg uppercase text-amber-950 md:justify-center md:gap-10 md:space-x-10">
        <li className="whitespace-nowrap hover:scale-125 hover:underline">
          <a href="#home" aria-label={`Navigate to ${home}`}>
            {home}
          </a>
        </li>
        <li className="whitespace-nowrap hover:scale-125 hover:underline">
          <a href="#about" aria-label={`Navigate to ${about}`}>
            {about}
          </a>
        </li>
        <li className="whitespace-nowrap hover:scale-125 hover:underline">
          <a href="#card" aria-label={`Navigate to ${card}`}>
            {card}
          </a>
        </li>
        <li className="whitespace-nowrap hover:scale-125 hover:underline">
          <a href="#contact" aria-label={`Navigate to ${contact}`}>
            {contact}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;

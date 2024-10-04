import React from "react";

interface NavBarComponent {
  home: string;
  about: string;
  card: string;
  contact: string;
}

const NavBar: React.FC<NavBarComponent> = ({ home, about, card, contact }) => {
  return (
    <ul className="flex min-w-full flex-wrap justify-center gap-2 bg-amber-950 p-4 text-lg uppercase text-amber-200 md:min-w-[400px] md:justify-center md:gap-10">
      <li className="whitespace-nowrap hover:underline">
        <a href="#">{home}</a>
      </li>
      <li className="whitespace-nowrap hover:underline">
        <a href="#">{about}</a>
      </li>
      <li className="whitespace-nowrap hover:underline">
        <a href="#">{card}</a>
      </li>
      <li className="whitespace-nowrap hover:underline">
        <a href="#">{contact}</a>
      </li>
    </ul>
  );
};

export default NavBar;

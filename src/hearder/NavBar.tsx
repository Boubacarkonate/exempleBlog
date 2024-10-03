import React from "react";

interface NavBarComponent {
  home: string;
  about: string;
  card: string;
  contact: string;
}
const NavBar: React.FC<NavBarComponent> = ({ home, about, card, contact }) => {
  return (
    <div>
      <ul className="flex justify-center bg-amber-950 p-4 text-lg uppercase text-amber-200">
        <li className="px-10 hover:underline">
          <a href="#">{home}</a>
        </li>
        <li className="px-10 hover:underline">
          <a href="#">{about}</a>
        </li>
        <li className="px-10 hover:underline">
          <a href="#">{card}</a>
        </li>
        <li className="px-10 hover:underline">
          <a href="#">{contact}</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;

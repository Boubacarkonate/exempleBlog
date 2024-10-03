import React from "react";

interface NavBarComponent {
  home: string;
  about: string;
  card: string;
  contact: string;
}

const NavBar: React.FC<NavBarComponent> = ({ home, about, card, contact }) => {
  return (
    <div className="overflow-x-auto md:overflow-visible">
      <ul className="flex min-w-[400px] justify-start gap-6 bg-amber-950 p-4 text-lg uppercase text-amber-200 md:justify-center md:gap-10">
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
    </div>
  );
};

export default NavBar;

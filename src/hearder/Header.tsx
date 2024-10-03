import NavBar from "./NavBar";
import Title from "./Title";

export const Header = () => {
  return (
    <div>
      <Title name="THE TRAVEL BLOG" />
      <NavBar home="Home" card="Photos" about="About" contact="Contact" />
    </div>
  );
};

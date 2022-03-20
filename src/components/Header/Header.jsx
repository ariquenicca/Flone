import { NavBar } from "./NavBar.style";

const Header = ({ className }) => {
  return (
    <div className={className}>
      <h1>Flone.</h1>
      <NavBar />
    </div>
  );
};

export default Header;

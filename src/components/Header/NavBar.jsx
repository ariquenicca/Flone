import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const NavBar = ({ className }) => {
  return (
    <div className={className}>
      <a href="">
        Home <ExpandMoreIcon />
      </a>
      <a href="">
        Shop <ExpandMoreIcon />
      </a>
      <a href="">Collection</a>
      <a href="">
        Pages <ExpandMoreIcon />
      </a>
      <a href="">
        Blog <ExpandMoreIcon />
      </a>
      <a href="">About</a>
      <a href="">Contract</a>
    </div>
  );
};

export default NavBar;

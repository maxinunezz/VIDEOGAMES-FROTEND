import { NavLink } from "react-router-dom";
import { Root, StyledButton, StyledImg } from "./styled";
import SearchBar from "../SearchBar/index";
import { ButtonA } from "./button";
import logoLinkedin from "../../assets/logoLinkedin.png";
import logoInstagram from "../../assets/logoInstagram.png";
import logoGithub from "../../assets/logoGithub.png";

const handleRedirectGithub = () => {
  window.location.href = "https://github.com/maxinunezz";
};
const handleRedirectInstagram = () => {
  window.location.href = "https://www.instagram.com/nunez_maximiliano/";
};
const handleRedirectLinkedin = () => {
  window.location.href =
    "https://www.linkedin.com/in/patricio-maximiliano-nu%C3%B1ez/";
};

const NavBar = ({ onSearch, onHomeClick, showSearchBar = true }) => {
  return (
    <Root>
      <StyledButton onClick={handleRedirectLinkedin}>
        <StyledImg src={logoLinkedin} alt="logo Li" />
      </StyledButton>
      <StyledButton onClick={handleRedirectGithub}>
        <StyledImg src={logoGithub} alt="logo github" />
      </StyledButton>

      <StyledButton onClick={handleRedirectInstagram}>
        <StyledImg src={logoInstagram} alt="logo ig" />
      </StyledButton>

      {showSearchBar && <SearchBar onSearch={onSearch} />}
      <ButtonA onClick={onHomeClick}>
        <NavLink to="/home">Home</NavLink>
      </ButtonA>
      <ButtonA>
        <NavLink to="/create">Create</NavLink>
      </ButtonA>
      <ButtonA>
        <NavLink to="/myvideogames">my games</NavLink>
      </ButtonA>
    </Root>
  );
};

export default NavBar;

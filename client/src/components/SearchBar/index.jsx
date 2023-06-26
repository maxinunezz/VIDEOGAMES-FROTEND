import { Root } from "./styled";
import { useState } from "react";
import { ButtonC } from "../NavBar/button";

const SearchBar = ({ onSearch }) => {
  const [name, setName] = useState("");
  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handleEnter = (event) => {
    if (event.key === "Enter") {
      onSearch(name);
    }
  };
  return (
    <Root>
      <input
        type="search"
        onChange={handleChange}
        onKeyDown={handleEnter}
        value={name}
      />
      <ButtonC onClick={() => onSearch(name)}>Search</ButtonC>
    </Root>
  );
};

export default SearchBar;

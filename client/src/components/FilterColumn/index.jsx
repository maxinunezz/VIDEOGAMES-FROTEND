import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getGenres,
  getMyVideogames,
  getVideogames,
  orderVideogames,
  orderbyrating,
} from "../../Redux/actions";
import { Root, GenresContainer } from "./styled";
import { ButtonD } from "../NavBar/button";

const FilterColumn = () => {
  const dispatch = useDispatch();

  const genres = useSelector((state) => state.genres);
  const myVideogames = useSelector((state) => state.myVideogames);
  const handleClick = (genre) => {
    dispatch(getVideogames({ genres: genre.toLowerCase() }));
    dispatch(getMyVideogames(genre.toLowerCase()));
  };

  const handleOrder = (order) => {
    dispatch(orderVideogames(order));
  };
  const handleRating = (order) => {
    dispatch(orderbyrating(order));
  };
  const restartFilters = () => {
    dispatch(getVideogames({}));
  };

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  return (
    <Root>
      <br></br>
      <h2>FILTERS</h2>
      <ButtonD onClick={() => handleOrder("A")}>⬆️ A-Z</ButtonD>
      <ButtonD onClick={() => handleOrder("D")}>⬇️ Z-A</ButtonD>
      <ButtonD onClick={() => handleRating(1)}>📉 1-5</ButtonD>
      <ButtonD onClick={() => handleRating(5)}>📈 5-1</ButtonD>
      <ButtonD onClick={() => restartFilters()}>Restart</ButtonD>
      <h2>GENRES</h2>
      <GenresContainer>
        {genres.map((genre, index) => (
          <p key={index} onClick={() => handleClick(genre.name)}>
            {genre.name}
          </p>
        ))}
      </GenresContainer>
    </Root>
  );
};

export default FilterColumn;

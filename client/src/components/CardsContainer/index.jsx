//useeffect mvideogames, paginado completo
import {
  Buttons,
  Root,
  GameGrid,
  Image,
  Title,
  GenreContainer,
  P,
  Card,
} from "./styled";

import CardVideogame from "../CardVideogame";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyVideogames, getVideogames } from "../../Redux/actions";
import { ButtonA } from "../NavBar/button";

const CardsContainer = ({ cards }) => {
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const myGames = useSelector((state) => state.myVideogames);

  useEffect(() => {
    dispatch(getVideogames({ page, search: name }));
  }, [page, name]);

  useEffect(() => {
    dispatch(getMyVideogames());
  }, [page]);

  const handleClick = (e) => {
    e.preventDefault();

    let nextPage = page;

    if (e.target.textContent === "Siguiente" && page < 15) {
      nextPage = page + 1;
    } else if (e.target.textContent === "Anterior" && page >= 2) {
      nextPage = page - 1;
    }

    setPage(nextPage);
  };

  const totalPages = Math.ceil(300 / 20);
  const pagesArray = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <Root>
      <GameGrid>
        {page === 1 &&
          myGames &&
          myGames.map((game) => (
            <Card key={game.id}>
              <Image src={game.image} alt="" />
              <Title>{game.name}</Title>

              <GenreContainer>
                <ul>
                  <li>Description: {game.description}</li>
                  <li>Platform: {game.platforms}</li>
                  <li>Rating: {game.rating}</li>
                  <li>Relase Date: {game.releaseDate}</li>
                  <li>Genre:</li>
                  {game.genres.map((genre, index) => (
                    <P key={`${genre.name}-${index}`}> {genre.name}</P>
                  ))}
                </ul>
              </GenreContainer>
            </Card>
          ))}

        {cards.map((card) => (
          <CardVideogame key={card.id} data={card} />
        ))}
      </GameGrid>
      <Buttons>
        <ButtonA onClick={handleClick}>Back</ButtonA>
        {pagesArray.map((pageNum) => (
          <ButtonA key={pageNum} onClick={() => setPage(pageNum)}>
            {pageNum}
          </ButtonA>
        ))}
        <ButtonA onClick={handleClick}>Next</ButtonA>
      </Buttons>
    </Root>
  );
};

export default CardsContainer;

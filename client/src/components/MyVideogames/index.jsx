import axios from "axios";
import { useState, useEffect } from "react";

import { Image, Title, GenreContainer, P, Card, Background } from "./styled";

const VideogamesCreated = () => {
  const [myGames, setMyGames] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/myvideogames")
      .then((res) => {
        setMyGames(res.data.filter((game) => game.id));
        setFilteredMyGames(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Background>
      {myGames.map((game) => (
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
    </Background>
  );
};
export default VideogamesCreated;

import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ButtonA } from "../components/NavBar/button";

const BackgroundImage = styled.img`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;
const MainContent = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  display: flex;
  text-align: center;
  align-items: center;
  font-family: "Arial", sans-serif;
  font-weight: bold;
  font-size: 54px;
  letter-spacing: 10px;
  margin: auto;

  &:hover {
    text-shadow: 0 0 15px rgba(150, 255, 25, 1);
  }
`;
const Description = styled.div`
  display: inline-block;
  justify-content: center;
  border-radius: 20px;
  margin: 20px;
  background-color: rgba(25, 25, 25, 0.5);
  color: greenyellow;
  &:hover {
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  }
`;

const Content = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  border-radius: 20px;
  margin: 20px;
  margin: auto;
  background-color: rgba(25, 25, 25, 0.5);
  color: greenyellow;
  &:hover {
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  }
  img {
    width: 300px;
    height: 250px;
  }
`;

const Li = styled.li`
  text-decoration: underline;
  font-weight: bold;
`;
const Boton = styled.div`
  position: absolute;
  left: 540px;
  bottom: 10px;
`;

const Detail = ({ onHomeClick }) => {
  const { id } = useParams();
  const [videogame, setVideogame] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/videogames/${id}`).then(({ data }) => {
      if (data) {
        setVideogame(data);
      } else {
        window.alert("no hay videogames con ese id");
      }
    });
    return setVideogame({});
  }, [id]);

  return (
    <>
      <BackgroundImage src={videogame.background_image_additional} alt="" />
      <MainContent>
        <Title>{videogame.name}</Title>
        <Description>
          <p>{videogame.description_raw}</p>
        </Description>

        <Content>
          <img src={videogame.background_image} alt="" />
          <ul>
            <Li>Release date</Li>
            <>📅 {videogame.released}</>
            <br></br>
            <br></br>
            <Li>Rating</Li>⭐ {videogame.rating_top}
          </ul>
          <ul>
            <Li>Genres</Li>

            {videogame.genres &&
              videogame.genres.map((genre) => (
                <div key={genre.id}>
                  <>🏈 {genre.name}</>
                </div>
              ))}
          </ul>
          <ul>
            <Li>Platforms</Li>

            {videogame.platforms &&
              videogame.platforms.map((platform) => (
                <div key={platform.id}>
                  <>🎮 {platform.platform.name}</>
                </div>
              ))}
          </ul>
          <Boton>
            <ButtonA onClick={onHomeClick}>
              <NavLink to="/home">Home</NavLink>
            </ButtonA>
          </Boton>
        </Content>
      </MainContent>
    </>
  );
};
export default Detail;

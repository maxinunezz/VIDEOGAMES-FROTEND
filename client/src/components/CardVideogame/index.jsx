import { useNavigate } from "react-router-dom";
import { Root, Image, Title, P, GenreContainer } from "./styled";

const CardVideogame = ({ data }) => {
  const navigate = useNavigate();

  function handleClick() {
    navigate({
      pathname: `/videogame/detail/${data.id}`,
    });
  }
  return (
    <Root onClick={handleClick}>
      <Image src={data.background_image} alt="" />

      <Title>{data.name}</Title>
      <GenreContainer>
        <Title>
          <strong>
            <u>Genre</u>
          </strong>
          {data.genres.map((genre, index) => (
            <P key={index}>{genre.name}</P>
          ))}
        </Title>
      </GenreContainer>
    </Root>
  );
};
export default CardVideogame;

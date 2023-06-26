import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-size: 2500px;
  background-position: center;
  background-image: linear-gradient(
      rgba(18, 28, 63, 0.2),
      rgba(55, 58, 35, 0.4)
    ),
    url("https://images2.alphacoders.com/123/1231556.png");
`;

export const GameGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  justify-items: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 10px;
`;
export const Card = styled.div`
  min-height: 350px;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px;
  margin-top: 50px;
  margin-left: 200px;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(170, 230, 6, 0.5);
  overflow: hidden;
  font-family: "Montserrat", sans-serif;
  width: 200px;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(255, 0, 102, 0.9);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
`;

export const Title = styled.h1`
  margin: 5px 0 0;
  font-size: 16px;
  font-weight: bolder;
  text-align: center;
  margin-bottom: 5px;
  color: greenyellow;
`;

export const GenreContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  padding: 0 5px;
`;

export const P = styled.p`
  margin: 5px;
  font-size: 14px;
  line-height: 1.2;
  text-align: center;
`;

import styled from "styled-components";

export const Root = styled.div`
  min-height: 350px;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px;
  margin-top: 50px;
  margin-left: 200px;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.4);
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

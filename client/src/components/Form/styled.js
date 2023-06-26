import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  margin: auto;
  background-image: url("https://www.cinconoticias.com/wp-content/uploads/Generos-de-videojuegos.jpg");
  background-size: cover;
  background-position: center;
`;

export const FormStyle = styled.form`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: rgba(25, 20, 10, 0.4);
  border-radius: 25px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;
export const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-family: Arial, sans-serif;
  height: 100%;
`;
export const Title = styled.h1`
  margin-top: 50px;
  font-size: 30px;
  font-weight: bold;
  color: greenyellow;
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: bold;
  color: greenyellow;
`;
export const Labeel = styled.label`
  font-size: 15px;
  font-weight: bold;
  color: red;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: red;
  border-color: white;
  background-color: rgba(25, 25, 25, 0.5);
`;

export const Select = styled.select`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: red;
  background-color: rgba(25, 25, 25, 0.5);
`;

export const H3 = styled.h3`
  font-size: 16px;
  color: red;
`;

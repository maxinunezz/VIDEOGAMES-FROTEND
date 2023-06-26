import styled from "styled-components";

export const ButtonA = styled.button`
  background-color: #93ff00;
  color: #fff;
  border: none;
  border-radius: 25cm;
  font-size: 100%;
  padding: 0.5rem 1rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  outline: none;
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
  letter-spacing: 0px;
  font-weight: bold;
  text-shadow: 0px 2px 13px #000;

  :hover {
    background-color: #000000;
    color: #f012be;
    box-shadow: 0 0 10px #f012be;
    transform: translate(-5px, -5px);
  }
`;
export const ButtonB = styled.button`
  background-color: greenyellow;
  color: #fff;
  border: none;
  border-radius: 50%;
  font-size: 1.2rem;
  padding: 1rem 2rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  outline: none;
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
  text-shadow: 0px 2px 13px #000;

  :hover {
    background-color: greenyellow;
    color: #ff4545;
    box-shadow: 0 0 10px #f012be;
    transform: rotate(10deg);
  }
`;

export const ButtonC = styled.button`
  background-color: #ff0000;
  color: #fff;
  margin-left: 10px;
  border: none;
  border-radius: 25cm;
  font-size: 100%;
  padding: 0.5rem 1rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  outline: none;
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
  letter-spacing: 0px;
  font-weight: bold;
  text-shadow: 0px 2px 13px #000;

  :hover {
    background-color: #000000;
    color: #f012be;
    box-shadow: 0 0 10px #f012be;
    transform: translate(-5px, -5px);
  }
`;

export const ButtonD = styled.button`
  padding: 10px 20px;
  background-color: rgba(25, 25, 25, 0.5);
  color: greenyellow;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: rgba(25, 25, 25, 0.5);
    color: red;
  }
`;

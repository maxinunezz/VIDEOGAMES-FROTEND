import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0;
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  background-color: rgba(25, 25, 25, 0.5);
  color: greenyellow;
  width: 150px;

  h2 {
    display: flex;
    color: red;
    justify-content: center;
  }
`;

export const GenresContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  margin-left: 20px;
  overflow: auto;
  cursor: pointer;

  ::-webkit-scrollbar {
    width: 0.5em;
  }

  ::-webkit-scrollbar-track {
    background-color: rgba(9, 0, 0, 1);
  }

  ::-webkit-scrollbar-thumb {
    background-color: greenyellow;
  }
`;

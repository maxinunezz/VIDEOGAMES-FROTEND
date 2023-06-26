import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  align-items: center;

  input[type="search"] {
    color: white;
    background-color: #313131;
    border: 3px solid #93ff00;
    border-radius: 50px;
    padding: 4px 10px;
    transition: border-color 0.5s ease-in-out;

    &:hover {
      border-color: red;
    }
  }
`;

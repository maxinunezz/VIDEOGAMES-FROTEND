import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 20px;
  height: 40px;
  background-color: rgba(51, 51, 51, 0.2);
  color: white;
  font-family: "Arial", sans-serif;
  position: fixed;
  top: 0;
  width: 100%;
`;
export const SocialButtons = styled.div`
  display: flex;
  gap: 10px;
  height: 20px;
`;

export const StyledButton = styled.button`
  height: 40px;
  background-color: rgba(182, 255, 93, 0.5);
`;

export const StyledImg = styled.img`
  cursor: pointer;

  height: 30px;
`;

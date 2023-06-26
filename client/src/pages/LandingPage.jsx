import styled from "styled-components";
import { ButtonB } from "../components/NavBar/button";
import { Link } from "react-router-dom";

const LandingStyle = styled.div`
  background-attachment: fixed;
  height: 100vh;
  background-image: url("https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274_1280.jpg");
  background-size: cover;
  background-position: center;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  max-width: 200px;
  margin: 0 auto;
  padding: 1500px;
  background-color: rgba(40, 20, 10, 0.2);
  border-radius: 25px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
`;
const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  color: greenyellow;
`;

const LandingPage = () => {
  return (
    <>
      <LandingStyle>
        <Container>
          <Title>
            <h1>¡WELCOME TO OUR WORLD GAMERNAUT!</h1>
          </Title>
          <ButtonB>
            <Link to="/home">home</Link>
          </ButtonB>
        </Container>
      </LandingStyle>
    </>
  );
};
export default LandingPage;

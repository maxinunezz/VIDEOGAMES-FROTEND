import VideogamesCreated from "../components/MyVideogames";
import NavBar from "../components/NavBar/NavBar";

const MiVideogame = () => {
  return (
    <>
      <NavBar showSearchBar={false} />

      <VideogamesCreated />
    </>
  );
};
export default MiVideogame;

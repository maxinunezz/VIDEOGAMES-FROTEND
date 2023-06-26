import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames } from "../Redux/actions";
import NavBar from "../components/NavBar/NavBar";
import CardsContainer from "../components/CardsContainer";
import FilterColumn from "../components/FilterColumn";

const Home = () => {
  const dispatch = useDispatch(); //ejecuta actions de redux
  useEffect(() => {
    //ejecuta lo que esta dentro cuando cambia cierta dependecia definida en el array de dependencia. si esta vacio se ejecuta cada vez que el componente se renderiza
    dispatch(getVideogames({}));
  }, []);
  const [search, setSearch] = useState(false); //usestate se utiliza para realizar estados locales y que no cambie el valor con cada renderizacion
  const cards = useSelector((state) => state.videogames);

  const onSearch = (searchQuery) => {
    dispatch(getVideogames({ name: searchQuery }));
    setSearch(true);
  };
  const handleHomeClick = () => {
    dispatch(getVideogames({}));
    setSearch(false);
  };

  return (
    <div>
      {!search && <FilterColumn />}
      <NavBar onSearch={onSearch} onHomeClick={handleHomeClick} />
      <CardsContainer cards={cards} />
    </div>
  );
};
export default Home;

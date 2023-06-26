import { Route, Routes } from "react-router-dom";
import { LandingPage, Home, Create, Detail, MyVideogames } from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" Component={LandingPage} />
        <Route path="/home" Component={Home} />
        <Route path="/create" Component={Create} />
        <Route path="/videogame/detail/:id" Component={Detail} />
        <Route path="/myvideogames" Component={MyVideogames} />
      </Routes>
    </>
  );
}

export default App;

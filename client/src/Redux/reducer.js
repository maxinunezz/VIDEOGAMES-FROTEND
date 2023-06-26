const initialState = {
  videogames: [],
  genres: [],
  myVideogames: [],
  platforms: [],
};
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_VIDEOGAME":
      return {
        ...state,

        myVideogames: payload,
      };
    case "GET_VIDEOGAMES":
      return {
        ...state,
        videogames: payload,
        myVideogames: payload,
      };
    case "GET_VIDEOGAME":
      return {
        ...state,
        videogames: payload,
        myVideogames: payload,
      };

    case "ORDER":
      const allVideogamesCopy = [...state.videogames];
      const allMyVideogamesCopy = [...state.myVideogames];

      return {
        ...state,
        videogames:
          payload === "A"
            ? allVideogamesCopy.sort((a, b) => a.name.localeCompare(b.name))
            : allVideogamesCopy.sort((a, b) => b.name.localeCompare(a.name)),
        myVideogames:
          payload === "A"
            ? allMyVideogamesCopy.sort((a, b) => a.name.localeCompare(b.name))
            : allMyVideogamesCopy.sort((a, b) => b.name.localeCompare(a.name)),
      };
    case "ORDERBYRATING":
      const videogamesCopy = [...state.videogames];
      const myVideogamesCopy = [...state.videogames];
      return {
        ...state,
        videogames:
          payload === 1
            ? videogamesCopy.sort((a, b) => a.rating_top - b.rating_top)
            : videogamesCopy.sort((a, b) => b.rating_top - a.rating_top),
        myVideogames:
          payload === 1
            ? myVideogamesCopy.sort((a, b) => a.rating_top - b.rating_top)
            : myVideogamesCopy.sort((a, b) => b.rating_top - a.rating_top),
      };
    case "FILTER":
      const allVideogamesFiltered = state.videogames.filter(
        (videogame) => videogame.genre === payload
      );
      const allMyVideogamesFiltered = state.myVideogames.filter(
        (videogame) => videogame.genre === payload
      );
      return {
        ...state,
        videogames:
          payload === "videogames"
            ? [...state.videogames]
            : allVideogamesFiltered,
        myVideogames:
          payload === "videogames"
            ? [...state.myVideogames]
            : allMyVideogamesFiltered,
      };
    case "GET_GENRES":
      return {
        ...state,
        genres: payload,
      };
    case "GET_PLATFORMS":
      return {
        ...state,
        platforms: payload,
      };

    default:
      return { ...state };
  }
};
export default reducer;

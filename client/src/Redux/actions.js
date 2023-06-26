import {
  GET_VIDEOGAMES,
  GET_GENRES,
  ORDER,
  FILTER,
  ADD_VIDEOGAME,
  ORDERBYRATING,
  GET_PLATFORMS,
  GET_MYVIDEOGAMES,
} from "./actionTypes";
import axios from "axios";

export const getVideogames = ({ name, genres, page }) => {
  const endpoint = `http://localhost:3001/videogames?page=${page ?? "1"}&name=${
    name ?? ""
  }&genres=${genres ?? ""}`;

  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);
      dispatch({ type: GET_VIDEOGAMES, payload: data.results });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const getGenres = () => {
  const endpoint = "http://localhost:3001/genres";
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);

      dispatch({ type: GET_GENRES, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const getMyVideogames = (genres) => {
  const endpoint = `http://localhost:3001/myvideogames?genres=${
    genres ?? ""
  }&name=${name ?? ""}`;
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);
      console.log(data);
      dispatch({ type: GET_MYVIDEOGAMES, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const getPlatforms = () => {
  const endpoint = "http://localhost:3001/platforms";
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);

      dispatch({ type: GET_PLATFORMS, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const addVideogame = (videogame) => {
  const endpoint = "http://localhost:3001/myvideogames";
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, videogame);
      if (!data.length) throw Error("there is no videogame");
      return dispatch({
        type: ADD_VIDEOGAME,
        payLoad: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const orderVideogames = (order) => {
  return { type: ORDER, payload: order };
};

export const orderbyrating = (order) => {
  return { type: ORDERBYRATING, payload: order };
};

export const filterVideogames = (genre) => {
  return { type: FILTER, payload: genre.toLowerCase() };
};

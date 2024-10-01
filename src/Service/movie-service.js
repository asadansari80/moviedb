import axios from "axios";
import { APP_ENDPOINT, generateUrl } from "./app-endpoint";

export const getAllMovies = async (pageNo = 1) => {
  return axios.get(generateUrl(APP_ENDPOINT.getAllMovies) + `&page=${pageNo}`);
};

export const getMovieDetails = (id) => {
  return axios.get(`${generateUrl(APP_ENDPOINT.getMovieDetails, id)}`);
};

export const getMovieCastDetails = (id) => {
  return axios.get(
    `${generateUrl(APP_ENDPOINT.getMovieDetails, id + "/credits")}`
  );
};

export const getUpcoming = (pageNo = 1) => {
  return axios.get(
    generateUrl(APP_ENDPOINT.getUpcomingMovies) + `&page=${pageNo}`
  );
};

export const getToprated = (value = 1) => {
  return axios.get(
    generateUrl(APP_ENDPOINT.getTopratedMovies) + `&page=${value}`
  );
};

export const getSearchMovies = (payload) => {
  // console.log(
  //   generateUrl(APP_ENDPOINT.getSearchMovies) + `&query=${payload.search}`,
  //   "55",
  //   payload
  // );
  return axios.get(
    generateUrl(APP_ENDPOINT.getSearchMovies) +
      `&query=${payload.search}` +
      `&page=${payload.pageNo || 1}`
  );
};

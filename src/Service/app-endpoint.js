export const BASE_URL = "https://api.themoviedb.org/3/";
export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
const API_key = "c45a857c193f6302f2b5061c3b85e743";

export const APP_ENDPOINT = {
  getAllMovies: `movie/popular`,
  getMovieDetails: `movie/`,
  getUpcomingMovies: `movie/upcoming`,
  getTopratedMovies: `movie/top_rated`,
  getSearchMovies: `search/movie`,
};

export const generateUrl = (endpoint, params = "") => {
  return (
    BASE_URL +
    endpoint +
    (params ? params : "") +
    `?api_key=${API_key}&language=en-US`
  );
};

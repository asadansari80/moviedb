import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../Service/movie-service";
import { IMAGE_BASE_URL } from "../Service/app-endpoint";
import Cast from "../Component/Cast";

const MovieDetails = () => {
  const param = useParams();
  // console.log(param, "ttt");
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // console.log(movieDetails, "vvff");
  useEffect(() => {
    setLoading(true);
    getMovieDetails(param.movieId)
      .then((response) => {
        // console.log(response, "888");
        setMovieDetails(response.data);
      })
      .catch((error) => {
        console.error(error);
        setError("Error displaying data");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [param.movieId]);

  if (loading) {
    return <Box>Loading... </Box>;
  }
  if (error) {
    return <Box>{error}</Box>;
  }

  return (
    <Box padding={"10px"}>
      <Box>
        <Box display={"flex"} flexWrap={"wrap"}>
          <Box width={"50%"}>
            <Box display="flex" padding={"10px"}>
              <Box padding={"10px"}>
                <img
                  src={`${IMAGE_BASE_URL}${movieDetails?.poster_path}`}
                  height="100px"
                  width="70px"
                />
              </Box>
              <Box padding={"10px"}>
                <Typography variant="h6" fontSize="18px">
                  {movieDetails?.original_title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  fontSize="14px"
                  color="lightblue"
                >
                  Rating: {movieDetails?.vote_average}
                </Typography>
                <Box display="flex">
                  {" "}
                  <Typography
                    variant="subtitle1"
                    fontSize="14px"
                    color="grey"
                    paddingRight={1}
                  >
                    {movieDetails?.runtime} min
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    fontSize="14px"
                    color="lightblue"
                  >
                    {movieDetails?.genres.map((genre) => genre.name).join(", ")}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box>
              Overview
              <Typography variant="subtitle1" fontSize="10px" color="grey">
                {movieDetails?.overview}
              </Typography>
            </Box>
          </Box>
          <Box>
            <img
              src={IMAGE_BASE_URL + movieDetails?.backdrop_path}
              width={"100%"}
              height={"auto"}
            />
          </Box>
        </Box>
      </Box>
      <Box>
        <Cast />
      </Box>
    </Box>
  );
};

export default MovieDetails;

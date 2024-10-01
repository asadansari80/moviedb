import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getMovieCastDetails, getMovieDetails } from "../Service/movie-service";
import { useParams } from "react-router-dom";
import { IMAGE_BASE_URL } from "../Service/app-endpoint";

const Cast = () => {
  const param = useParams();
  // console.log(param, "ttt");
  const [movieCastDetails, setMovieCastDetails] = useState(null);
  // console.log(movieCastDetails, "vvff");
  useEffect(() => {
    getMovieCastDetails(param.movieId).then((response) => {
      // console.log(response, "888");
      setMovieCastDetails(response.data);
    });
  }, [param.movieId]);
  return (
    <Box display="flex" flexWrap="wrap">
      Cast
      {movieCastDetails?.cast.map((data) => {
        console.log(data, "99");
        return (
          <Box padding="20px">
            <img
              src={`${IMAGE_BASE_URL}${data.profile_path}`}
              width="90px"
              height="120px"
            />
            <Typography>{data.original_name}</Typography>
            <Typography fontSize="10px" color="grey">
              Character{data.character}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default Cast;

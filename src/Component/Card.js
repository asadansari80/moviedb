import { Box, Pagination, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { IMAGE_BASE_URL } from "../Service/app-endpoint";

const Card = (props) => {
  // console.log(props, "222");
  const rating = props.rating.toFixed(1);
  const poster = props.poster;
  // console.log(poster);
  // console.log(`${IMAGE_BASE_URL}{${poster}`, "8552");
  return (
    <Link to={`/moviedetail/${props.movieId}`} className="card">
      <Box>
        <Box margin={"22px"} sx={{ cursor: "pointer" }}>
          <Box>
            <img
              src={`${IMAGE_BASE_URL}${poster}`}
              width={"140px"}
              height={"200px"}
            />
          </Box>
          <Box>
            <Typography
              sx={{
                maxWidth: "140px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                whiteSpace: "normal",
                color: "white",
              }}
            >
              {props.originalTitle}
            </Typography>
            <Typography variant="body2" color="grey" fontSize="12px">
              Rating {rating}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Link>
  );
};

export default Card;

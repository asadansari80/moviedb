import { Box, Pagination, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Card from "../Component/Card";
// import { getAllMovies } from "../Service/movie-service";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, fetchSearchMovies } from "../Redux/movieSlice";

const Home = () => {
  const [pageNo, setPageNo] = useState(1);
  const movieState = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    if (movieState.search) {
      dispatch(fetchSearchMovies({ search: movieState.search, pageNo }));
    } else {
      dispatch(fetchMovies(pageNo));
    }
  }, [pageNo]);

  const handlePageChange = (event, value) => {
    setPageNo(value);
  };

  return (
    <Box sx={{ backgroundColor: "black" }}>
      <Box>
        <Typography color="white"></Typography>
      </Box>
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        alignItems={"center"}
        padding={"14px"}
      >
        {movieState.movies.map((data) => {
          // console.log(data, "eee");
          return (
            <Card
              poster={data.poster_path}
              originalTitle={data.title}
              rating={data.vote_average}
              movieId={data.id}
            />
          );
        })}
      </Box>
      <Box>
        <Stack
          spacing={2}
          justifyContent="center"
          alignItems="center"
          paddingBottom={4}
        >
          {" "}
          <Pagination
            count={movieState.totalPage}
            color="primary"
            shape="rounded"
            page={pageNo}
            onChange={handlePageChange}
            sx={{
              "& .MuiPaginationItem-root": {
                color: "white",
              },
              "& .Mui-selected": {
                backgroundColor: "red",
                color: "white",
              },
              "& .MuiPaginationItem-ellipsis": {
                color: "grey",
              },
            }}
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default Home;

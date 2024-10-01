import React, { useEffect, useState } from "react";
import { Box, Pagination, Stack, Typography } from "@mui/material";
import Card from "../Component/Card";
import { getToprated, getUpcoming } from "../Service/movie-service";

const TopRated = () => {
  const [toprated, setToprated] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    getToprated(pageNo)
      .then((response) => {
        console.log(response, "99");
        setToprated(response.data.results);
        setTotalPage(response.data.total_pages);
      })
      .catch((error) => {
        console.error(error);
        setError("Error displaying data");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [pageNo]);

  const handlePageChange = (event, value) => {
    // console.log(value, "fff");
    setPageNo(value);
  };
  if (loading) {
    return <Box>Loading... </Box>;
  }
  if (error) {
    return <Box>{error}</Box>;
  }
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
        {toprated.map((data) => {
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
            count={totalPage}
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

export default TopRated;

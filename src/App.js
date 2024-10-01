import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import TopRated from "./Pages/TopRated";
import Upcoming from "./Pages/Upcoming";
import Navbar from "./Component/Navbar/Navbar";
import { Container } from "@mui/material";
import MovieDetails from "./Pages/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container
        maxWidth={false}
        disableGutters
        sx={{ backgroundColor: "black", minHeight: "100vh", color: "white" }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/top-rated" element={<TopRated />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/moviedetail/:movieId" element={<MovieDetails />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;

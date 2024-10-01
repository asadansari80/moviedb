import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchMovies, setSearch } from "../../Redux/movieSlice";

const drawerWidth = 240;
const navItems = [
  { label: "Popular", url: "/" },
  { label: "Top-rated", url: "/top-rated" },
  { label: "Upcoming", url: "/upcoming" },
];
const Navbar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const search = useSelector((state) => state.movies.search);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleSearch = (value) => {
    dispatch(setSearch(value));
  };

  const handleSearchClick = () => {
    console.log("Searching for:", search);
    if (search) {
      navigate("/");
      dispatch(fetchSearchMovies({ search }));
    }
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", bgcolor: "gray", height: "100%" }}
    >
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding sx={{ color: "black" }}>
            <ListItemButton sx={{ textAlign: "center" }}>
              <NavLink to={item.url} className={"navLink"}>
                <ListItemText primary={item.label} />
              </NavLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box
      sx={{
        display: "block",
        width: "100%",
        height: { xs: "50px", sm: "64px" },
      }}
    >
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar component="nav" sx={{ backgroundColor: "darkgrey" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                display: { sm: "block" },
                cursor: "pointer",
              }}
            >
              <Link to={"/"} className="logo">
                MovieDb
              </Link>
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" }, ml: 2 }}>
              {navItems.map((item) => (
                <Button key={item} sx={{ color: "white" }}>
                  <NavLink to={item.url} className={"navLink"}>
                    {item.label}
                  </NavLink>
                </Button>
              ))}
            </Box>

            {/* Search Bar */}
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search"
              value={search}
              onChange={(event) => {
                handleSearch(event.target.value);
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              sx={{
                mr: 2,
                display: { sm: "block" },
              }}
            />

            {/* Search Button */}
            <Button
              variant="contained"
              color="primary"
              onClick={handleSearchClick}
              sx={{ display: { sm: "block" } }}
            >
              Search
            </Button>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
    </Box>
  );
};

export default Navbar;

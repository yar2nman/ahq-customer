import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  useMediaQuery,
  Button,
  Menu,
  MenuItem,
  ListItemIcon
} from "@material-ui/core";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link  } from "react-router-dom";

// IMPORTING ICONS
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import SchoolIcon from "@material-ui/icons/School";
import PersonIcon from "@material-ui/icons/Person";
import BookmarksIcon from "@material-ui/icons/Bookmarks";

// REACT APP IMPORTS
// LOCAL-STYLING
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));


const Bar = (props: any) => {
  const classes = useStyles();
  const [anchor, setAnchor] = React.useState(null);
  const open = Boolean(anchor);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleMenu = (event: any) => {
    setAnchor(event.currentTarget);
  };
  return (
    <div className={classes.root}>
          <AppBar>
            <Toolbar>
              <Typography
                variant="h5"
                component="p"
                color="textSecondary"
                className={classes.title}
              >
                AHQ Parts
              </Typography>
              {isMobile ? (
                <>
                  <IconButton
                    color="inherit"
                    className={classes.menuButton}
                    edge="start"
                    aria-label="menu"
                    onClick={handleMenu}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchor}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right"
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right"
                    }}
                    open={open}
                  >
                    <MenuItem
                      onClick={() => setAnchor(null)}
                      component={Link}
                      to="/"
                    >
                      <ListItemIcon>
                        <HomeIcon />
                      </ListItemIcon>
                      <Typography variant="h6"> Home</Typography>
                    </MenuItem>
                    <MenuItem
                      onClick={() => setAnchor(null)}
                      component={Link}
                      to="/about"
                    >
                      <ListItemIcon>
                        <SchoolIcon />
                      </ListItemIcon>
                      <Typography variant="h6"> About </Typography>
                    </MenuItem>
                    <MenuItem
                      onClick={() => setAnchor(null)}
                      component={Link}
                      to="/dashboard"
                    >
                      <ListItemIcon>
                        <PersonIcon />
                      </ListItemIcon>
                      <Typography variant="h6"> DashBoard</Typography>
                    </MenuItem>
                    <MenuItem
                      onClick={() => setAnchor(null)}
                      component={Link}
                      to="/album"
                    >
                      <ListItemIcon>
                        <BookmarksIcon />
                      </ListItemIcon>
                      <Typography variant="h6"> Album </Typography>
                    </MenuItem>
                  </Menu>
                </>
              ) : (
                <div style={{ marginRight: "2rem" }}>
                  <Button
                    variant="text"
                    component={Link}
                    to="/"
                    color="inherit"
                  >
                    <HomeIcon />
                    Home
                  </Button>
                  <Button
                    variant="text"
                    component={Link}
                    to="/about"
                    color="inherit"
                  >
                    <SchoolIcon />
                    About
                  </Button>
                  <Button
                    variant="text"
                    component={Link}
                    to="/dashboard"
                    color="inherit"
                  >
                    <PersonIcon />
                    DashBoard
                  </Button>
                  <Button
                    variant="text"
                    component={Link}
                    to="/album"
                    color="inherit"
                  >
                    <BookmarksIcon />
                    album
                  </Button>
                </div>
              )}
            </Toolbar>
          </AppBar>
    </div>
  );
};

export default Bar;

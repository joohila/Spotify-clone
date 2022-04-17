import React from "react";
import "./Header.css";
import { useDataLayerValue } from "./DataLayer";
import {logout} from './Spotify'
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useEffect } from "react";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    menuPaper: {
      backgroundColor: "black",
      color:"white"
    }
  }));

function Header({ spotify }) {
  const classes = useStyles();

  const [{ user }, dispatch] = useDataLayerValue();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const handleLogout = ()=>{
      setAnchorEl(null);
      logout();
      dispatch({
        type: "SET_USER",
        user:null,
      });
      dispatch({
        type: "SET_TOKEN",
        token:null,
      });
  }

  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input className="header_search"
          placeholder="Search for Artists, Songs, or Podcasts "
          type="text"
        />
      </div>
      <div className="header__right">
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
      <Avatar alt={user?.display_name} src={user?.images[0]?.url} />
      <h4 style={{color:'white',padding:'10px'}}>{user?.display_name}</h4>
      </Button>
      <Menu
        id="simple-menu"  classes={{ paper: classes.menuPaper }}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
      </div>
    </div>
  );
}

export default Header;

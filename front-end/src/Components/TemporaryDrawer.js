import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import { Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import ListItemText from '@mui/material/ListItemText';
import DarkMode from '../Components/DarkMode';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, true)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
          <ListItem enablePadding>
              <Link to="/home" style={{ textDecoration: 'none' , color: 'black' }}>
              <ListItemText primary="Home" />
              </Link>
          </ListItem>
          <ListItem enablePadding>
              <Link to="/" style={{ textDecoration: 'none' , color: 'black' }}>
              <ListItemText primary="Restaurants" />
              </Link>
          </ListItem>
          <ListItem enablePadding>
              <Link to="/carts" style={{ textDecoration: 'none' , color: 'black' }}>
              <ListItemText primary="Cart" />
              </Link>
          </ListItem>
          <Divider />
          <ListItem enablePadding>
              <Link to="/about-us" style={{ textDecoration: 'none' , color: 'black' }}>
              <ListItemText primary="About us" />
              </Link>
          </ListItem>
          <ListItem enablePadding>
              <Link to="/contact" style={{ textDecoration: 'none' , color: 'black' }}>
              <ListItemText primary="Contact" />
              </Link>
          </ListItem>
          <ListItem enablePadding>
              <Link to="/signup" style={{ textDecoration: 'none' , color: 'black' }}>
              <ListItemText primary="Sign Up" />
              </Link>
          </ListItem>
          {/* Dark Mode Toggle switch */}
          <DarkMode/>
      </List>
      <Divider />
      <List>
      <ListItem enablePadding>
              <Link to="/" style={{ textDecoration: 'none' , color: 'black' }}>
              <b>Lemon®</b>
              <ListItemText secondary="Created by Ronnie Garcia" />
              </Link>
          </ListItem>
      </List>
    </Box>
  );
  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}> <MenuIcon id="menu-icon"  fontSize="large" style={{ color: 'white' }} /></Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
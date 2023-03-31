import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import MailIcon from '@mui/icons-material/Mail';
// import PushPinIcon from '@mui/icons-material/PushPin';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ListItemButton from '@mui/material/ListItemButton';
// import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
// import Restaurants from './Restaurants.js';
import { Link } from 'react-router-dom';

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
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
          <ListItem enablePadding>
              <ListItemIcon>
              </ListItemIcon>
              <Link to="/home" style={{ textDecoration: 'none' , color: 'black' }}>
              <ListItemText primary="Home" />
              </Link>
          </ListItem>
          <ListItem enablePadding>
              <ListItemIcon>
              </ListItemIcon>
              <Link to="/" style={{ textDecoration: 'none' , color: 'black' }}>
              <ListItemText primary="Restaurants" />
              </Link>
          </ListItem>
      </List>
      <Divider />
      <List>
        {['Previous Orders', 'Profile', 'Sign up'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
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
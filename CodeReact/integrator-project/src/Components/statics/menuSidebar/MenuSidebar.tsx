import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import "./MenuSidebar.css";
import { IconButton, Typography } from '@material-ui/core';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import RedeemIcon from '@material-ui/icons/Redeem';
import LinkIcon from '@material-ui/icons/Link';
import EmailIcon from '@material-ui/icons/Email';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


type Anchor = 'left';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  return (
    <div>
      {(['left'] as Anchor[]).map((anchor) => (
        <React.Fragment key={anchor}>

          <IconButton onClick={toggleDrawer(anchor, true)} edge="start" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Button>Menu</Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
          <div className='Sidebar'>
            <List>
              <Link className='Sidebar' to= '/home'>
              {['Home'].map((text) => (
                <ListItem button key={text}>
                  <ListItemIcon> <HomeIcon /></ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
              </Link>
              <Link className='Sidebar' to='/kits'>
              {['Kits'].map((text) => (
                <ListItem button key={text}>
                  <ListItemIcon> <RedeemIcon /></ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
              </Link>
              <Link className='Sidebar' to='/sobrenos'>
              {['Sobre nós'].map((text) => (
                <ListItem button key={text}>
                  <ListItemIcon> <PeopleAltIcon /></ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
              </Link>
              <Link className='Sidebar' to='/team'>
              {['Equipe'].map((text) => (
                <ListItem button key={text}>
                  <ListItemIcon> <LinkIcon /></ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
              </Link>
              <Link className='Sidebar' to='/thanks'>
                {['Contato'].map((text) => (
                <ListItem button key={text}>
                  <ListItemIcon> <EmailIcon /></ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
              </Link>
              <Link className='Sidebar' to='/login'>
              {['Logout'].map((text) => (
                <ListItem button key={text}>
                  <ListItemIcon> <ExitToAppIcon /></ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
              </Link>
              {[''].map((text) => (
                <ListItem button key={text}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
              {[''].map((text) => (
                <ListItem button key={text}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
              {[''].map((text) => (
                <ListItem button key={text}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
              {[''].map((text) => (
                <ListItem button key={text}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
              {[''].map((text) => (
                <ListItem button key={text}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
              {[''].map((text) => (
                <ListItem button key={text}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
              {[''].map((text) => (
                <ListItem button key={text}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
              {[''].map((text) => (
                <ListItem button key={text}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
              {[''].map((text) => (
                <ListItem button key={text}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
              {[''].map((text) => (
                <ListItem button key={text}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
              {[''].map((text) => (
                <ListItem button key={text}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
              {[''].map((text) => (
                <ListItem button key={text}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
              {[''].map((text) => (
                <ListItem button key={text}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
              {[''].map((text) => (
                <ListItem button key={text}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
              {[''].map((text) => (
                <ListItem button key={text}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
              {[''].map((text) => (
                <ListItem button key={text}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
              {[''].map((text) => (
                <ListItem button key={text}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
              {[''].map((text) => (
                <ListItem button key={text}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </div>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
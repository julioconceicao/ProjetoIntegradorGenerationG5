import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import "./MenuNavBar.css";
import { IconButton, Typography } from '@material-ui/core';
import { ClassNames } from '@emotion/react';
import { style } from '@mui/system';

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
          <Drawer  anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            <div className='Sidebar'>
              <Typography className='botaoSidbar'>
oi
              </Typography>
            </div>

          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
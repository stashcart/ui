import React, { FunctionComponent, useState } from 'react';
import {
  AppBar,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import Image from 'next/image';
import { grey } from '@mui/material/colors';

import ShoppingCart from 'assets/icons/shopping-cart.png';

export const Header: FunctionComponent = () => {
  const [menuElement, setMenuElement] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setMenuElement(event.currentTarget);
  };

  const onAnchorClose = () => {
    setMenuElement(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Avatar sx={{ bgcolor: grey[200], mr: 2 }}>
          <Image src={ShoppingCart} width={30} height={30} alt="logo" />
        </Avatar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Stashcart
        </Typography>
        <div>
          <IconButton onClick={handleMenu}>
            <AccountCircle />
          </IconButton>
          <Menu
            anchorEl={menuElement}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(menuElement)}
            onClose={onAnchorClose}
          >
            <MenuItem onClick={onAnchorClose}>Profile</MenuItem>
            <MenuItem onClick={onAnchorClose}>Logout</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

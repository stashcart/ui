import { AccountCircle } from '@mui/icons-material';
import {
  AppBar,
  Avatar,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import ShoppingCart from 'assets/icons/shopping-cart.png';
import Image from 'next/image';
import Link from 'next/link';
import React, { FunctionComponent, useState } from 'react';

export const Header: FunctionComponent = () => {
  const [menuElement, setMenuElement] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setMenuElement(event.currentTarget);
  };

  const onAnchorClose = () => {
    setMenuElement(null);
  };

  const HeaderMenuItem: FunctionComponent = ({ children }) => (
    <MenuItem onClick={onAnchorClose}>{children}</MenuItem>
  );

  return (
    <AppBar position="static">
      <Toolbar>
        <Link href="/" passHref>
          <a style={{ display: 'flex', marginRight: 'auto' }}>
            <Avatar sx={{ bgcolor: grey[200], mr: 2 }}>
              <Image src={ShoppingCart} width={30} height={30} alt="logo" />
            </Avatar>
            <Typography variant="h6" alignSelf="center">
              Stashcart
            </Typography>
          </a>
        </Link>
        <div>
          <IconButton onClick={handleMenu}>
            <AccountCircle />
          </IconButton>
          <Menu
            PaperProps={{
              sx: { width: '15rem' },
            }}
            anchorEl={menuElement}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            open={Boolean(menuElement)}
            onClose={onAnchorClose}
          >
            <Typography sx={{ padding: '6px 16px' }} noWrap>
              Signed as{' '}
              <Tooltip title="John Doe">
                <b>John Doe</b>
              </Tooltip>
            </Typography>
            <Divider sx={{ marginY: '8px' }} />
            <HeaderMenuItem>
              <Link href="/profile">Profile</Link>
            </HeaderMenuItem>
            <HeaderMenuItem>Logout</HeaderMenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

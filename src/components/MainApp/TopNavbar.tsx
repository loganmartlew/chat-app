import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IconButton, Tabs, Tab } from '@mui/material';
import { Menu, Chat, Search } from '@mui/icons-material';
import AppBar from '~/components/AppBar';

interface Props {
  tab: number;
  toggleDrawer: (state?: boolean | undefined) => void;
}

const TopNavbar: FC<Props> = ({ tab, toggleDrawer }) => {
  return (
    <AppBar position='static' sx={{ display: 'flex', flexDirection: 'row' }}>
      {/* <IconButton sx={{ mx: 1 }} onClick={() => toggleDrawer()}>
        <Menu />
      </IconButton> */}
      <Tabs
        variant='fullWidth'
        indicatorColor='primary'
        value={tab}
        sx={{ flexGrow: 1 }}
      >
        <Tab
          label='Your Rooms'
          icon={<Chat />}
          iconPosition='end'
          component={Link}
          to='/home'
        />
        <Tab
          label='Discover'
          icon={<Search />}
          iconPosition='end'
          component={Link}
          to='/discover'
        />
      </Tabs>
    </AppBar>
  );
};

export default TopNavbar;

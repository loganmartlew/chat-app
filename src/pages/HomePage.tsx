import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { useDrawer } from '~/features/Drawer/useDrawer';
import { useRouteTabs, TabPath } from '~/features/RouteTabs/useRouteTabs';
import TopNavbar from '~/components/HomePage/TopNavbar';
import Drawer from '~/features/Drawer/Drawer';

const PATHS: TabPath[] = [
  { text: 'Chat Rooms', route: '/home' },
  { text: 'Discover', route: '/discover' },
];

interface Props {}

const HomePage: FC<Props> = () => {
  const [drawerOpen, toggleDrawer] = useDrawer();
  const tab = useRouteTabs(PATHS);

  return (
    <>
      <TopNavbar tab={tab} toggleDrawer={toggleDrawer} />
      <Drawer
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
        sxBox={{ width: 250 }}
      >
        Hello
      </Drawer>
      <Outlet />
    </>
  );
};

export default HomePage;

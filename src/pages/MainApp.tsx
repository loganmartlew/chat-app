import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { useDrawer } from '~/features/Drawer/useDrawer';
import { useRouteTabs, TabPath } from '~/features/RouteTabs/useRouteTabs';
import TopNavbar from '~/components/HomePage/TopNavbar';
import BottomNavbar from '~/components/HomePage/BottomNavbar';
import Drawer from '~/features/Drawer/Drawer';
import signOut from '~/services/firebase/signOut';
import { useAuth } from '~/features/Auth/useAuth';

const PATHS: TabPath[] = [
  { text: 'Chat Rooms', route: '/home' },
  { text: 'Discover', route: '/discover' },
];

interface Props {}

const HomePage: FC<Props> = () => {
  const [drawerOpen, toggleDrawer] = useDrawer();
  const tab = useRouteTabs(PATHS);
  const { authUser } = useAuth();

  return (
    <>
      <TopNavbar tab={tab} toggleDrawer={toggleDrawer} />
      {/* <Drawer
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
        sxBox={{ width: 250 }}
      >
        <p>{authUser?.email || 'logged out'}</p>
        <button onClick={() => signOut()}>SignOut</button>
      </Drawer> */}
      <Outlet />
      <BottomNavbar />
    </>
  );
};

export default HomePage;

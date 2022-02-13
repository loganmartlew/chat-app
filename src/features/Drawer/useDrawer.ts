import { useState } from 'react';

type UseDrawer = () => [boolean, (state?: boolean | undefined) => void];

export const useDrawer: UseDrawer = () => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const toggleDrawer = (state?: boolean) => {
    if (state != null) {
      setDrawerOpen(state);
      return;
    }

    setDrawerOpen(prev => !prev);
  };

  return [drawerOpen, toggleDrawer];
};

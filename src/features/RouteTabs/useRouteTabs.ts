import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export interface TabPath {
  text: string;
  route: string;
}

export const useRouteTabs = (paths: TabPath[]) => {
  const [tab, setTab] = useState<number>(0);
  const { pathname } = useLocation();

  useEffect(() => {
    paths.forEach((path, i) => {
      if (pathname.match(path.route)) {
        setTab(i);
      }
    });
  }, [pathname]);

  return tab;
};

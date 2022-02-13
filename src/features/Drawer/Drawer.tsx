import { Drawer as MuiDrawer, Box, SxProps } from '@mui/material';
import { FC } from 'react';
import getTheme from '~/styles/theme';

type Theme = ReturnType<typeof getTheme>;

interface Props {
  open: boolean;
  onClose: () => void;
  sxDrawer?: SxProps<Theme> | undefined;
  sxBox?: SxProps<Theme> | undefined;
}

const Drawer: FC<Props> = ({
  open,
  onClose,
  sxDrawer,
  sxBox,
  children,
  ...rest
}) => {
  return (
    <MuiDrawer open={open} onClose={onClose} sx={sxDrawer} {...rest}>
      <Box role='presentation' onClick={onClose} onKeyDown={onClose} sx={sxBox}>
        {children}
      </Box>
    </MuiDrawer>
  );
};

export default Drawer;

import { useRef, FC } from 'react';
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Box,
  IconButton,
  Menu,
  MenuItem,
  styled,
} from '@mui/material';
import { DragHandle, MoreVert, Logout, Delete } from '@mui/icons-material';
import { useModal } from '~/hooks/useModal';

const StatusBadge = styled('span')<{ active: boolean }>(
  ({ theme, active }) => ({
    margin: '0.5em',
    width: '1.3ch',
    aspectRatio: '1/1',
    backgroundColor: active
      ? theme.palette.primary.main
      : theme.palette.grey[400],
    borderRadius: '100%',
  })
);

const StyledMenuItem = styled(MenuItem)<{ owned: boolean }>(
  ({ theme, owned }) => ({
    color: owned ? theme.palette.error.main : 'inherit',
  })
);

interface Props {
  id: string;
  name: string;
  active: boolean;
  owned: boolean;
}

const Room: FC<Props> = ({ id, name, active, owned }) => {
  const [menuOpen, toggleMenu] = useModal();
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <ListItem
      disablePadding
      secondaryAction={
        <IconButton ref={menuButtonRef} onClick={() => toggleMenu()}>
          <MoreVert />
        </IconButton>
      }
    >
      <ListItemButton sx={{ display: 'flex' }}>
        <ListItemIcon>
          <DragHandle />
        </ListItemIcon>
        <Tooltip title={active ? 'Users Active' : 'No Users Active'}>
          <StatusBadge active={active} />
        </Tooltip>
        <ListItemText primary={name} />
        <Box sx={{ flexGrow: 1 }} />
      </ListItemButton>
      <Menu
        anchorEl={menuButtonRef.current}
        open={menuOpen}
        onClose={() => toggleMenu(false)}
      >
        <StyledMenuItem owned={owned}>
          <ListItemIcon>
            {owned ? <Delete color='error' /> : <Logout />}
          </ListItemIcon>{' '}
          {owned ? 'Delete Room' : 'Leave Room'}
        </StyledMenuItem>
      </Menu>
    </ListItem>
  );
};

export default Room;

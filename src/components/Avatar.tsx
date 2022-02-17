import { FC } from 'react';
import { Avatar as MuiAvatar } from '@mui/material';
import { styled, SxProps, Theme } from '@mui/material/styles';
import { useAuth } from '~/features/Auth/useAuth';
import getStringAcronym from '~/util/getStringAcronym';

const StyledAvatar = styled(MuiAvatar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
}));

interface Props {
  role?: string;
  onClick?: () => void;
  sx?: SxProps<Theme>;
}

const Avatar: FC<Props> = ({ role, onClick, sx }) => {
  const { authUser } = useAuth();

  return (
    <StyledAvatar
      alt={authUser!.username}
      src={authUser!.avatar}
      role={role}
      onClick={onClick}
      sx={sx}
    >
      {!authUser!.avatar && getStringAcronym(authUser!.username)}
    </StyledAvatar>
  );
};

export default Avatar;

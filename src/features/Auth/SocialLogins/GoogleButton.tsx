import { FC, ReactEventHandler } from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FcGoogle } from 'react-icons/fc';

const GOOGLE_COLOR = '#FFFFFF';

const StyledButton = styled(Button)({
  textTransform: 'none',
  backgroundColor: GOOGLE_COLOR,
  color: 'GrayText',
  '&:hover': {
    backgroundColor: GOOGLE_COLOR,
  },
});

interface Props {
  onClick: ReactEventHandler;
}

const GoogleButton: FC<Props> = ({ onClick }) => {
  return (
    <StyledButton
      variant='contained'
      size='large'
      onClick={onClick}
      startIcon={<FcGoogle />}
    >
      Sign In with Google
    </StyledButton>
  );
};

export default GoogleButton;

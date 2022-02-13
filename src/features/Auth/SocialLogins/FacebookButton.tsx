import { FC, ReactEventHandler } from 'react';
import { Button } from '@mui/material';
import { FacebookRounded } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { lighten } from 'polished';

const FACEBOOK_COLOR = '#4267B2';

const StyledButton = styled(Button)({
  textTransform: 'none',
  backgroundColor: FACEBOOK_COLOR,
  '&:hover': {
    backgroundColor: lighten(0.07, FACEBOOK_COLOR),
  },
});

interface Props {
  onClick: ReactEventHandler;
}

const FacebookButton: FC<Props> = ({ onClick }) => {
  return (
    <StyledButton
      variant='contained'
      size='large'
      onClick={onClick}
      startIcon={<FacebookRounded />}
    >
      Sign In with Facebook
    </StyledButton>
  );
};

export default FacebookButton;

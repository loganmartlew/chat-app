import { AppBar } from '@mui/material';
import { styled } from '@mui/material/styles';

export default styled(AppBar)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'light' ? theme.palette.grey[100] : '',
  color:
    theme.palette.mode === 'light'
      ? theme.palette.text.secondary
      : theme.palette.common.white,
}));

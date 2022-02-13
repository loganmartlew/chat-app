import { useState, FC } from 'react';
import { UseFormRegister } from 'react-hook-form';
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormHelperText,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const ErrorMessage = styled(FormHelperText)(({ theme }) => ({
  color: theme.palette.error.main,
}));

interface Props {
  error: string | undefined;
  register: UseFormRegister<any>;
  confirm?: boolean;
}

const PasswordField: FC<Props> = ({ error, register, confirm }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <FormControl variant='outlined'>
      <InputLabel htmlFor='confirmPassword' color={error ? 'error' : 'primary'}>
        {confirm ? 'Confirm Password' : 'Password'}
      </InputLabel>
      <OutlinedInput
        error={!!error}
        type={showPassword ? 'text' : 'password'}
        {...register(confirm ? 'confirmPassword' : 'password', {
          required: true,
        })}
        endAdornment={
          <InputAdornment position='end'>
            <IconButton
              aria-label='toggle password visibility'
              onClick={() => setShowPassword(prev => !prev)}
              onMouseDown={e => e.preventDefault()}
              edge='end'
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label={confirm ? 'Confirm Password' : 'Password'}
      />
      <ErrorMessage color='error'>
        {typeof error === 'string' && error}
      </ErrorMessage>
    </FormControl>
  );
};

export default PasswordField;

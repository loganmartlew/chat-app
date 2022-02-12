import { useState, FC } from 'react';
import { UseFormRegister } from 'react-hook-form';
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

interface Props {
  error: boolean;
  register: UseFormRegister<any>;
}

const PasswordField: FC<Props> = ({ error, register }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <FormControl variant='outlined'>
      <InputLabel
        htmlFor='outlined-adornment-password'
        color={error ? 'error' : 'primary'}
      >
        Password
      </InputLabel>
      <OutlinedInput
        error={error}
        type={showPassword ? 'text' : 'password'}
        {...register('password', { required: true })}
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
        label='Password'
      />
    </FormControl>
  );
};

export default PasswordField;

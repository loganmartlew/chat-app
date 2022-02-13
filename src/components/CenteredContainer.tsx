import { FC } from 'react';
import { Box, Container } from '@mui/material';

interface Props {
  mb?: number;
}

const PageContainer: FC<Props> = ({ children, mb }) => {
  return (
    <Container
      sx={{ height: '100vh', display: 'grid', placeContent: 'center' }}
    >
      <Box sx={{ width: 'max-content', mx: 'auto', mb: mb || 0 }}>
        {children}
      </Box>
    </Container>
  );
};

export default PageContainer;

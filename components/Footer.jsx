import * as React from 'react';
import Box from '@mui/material/Box';
import {Container,Link} from '@mui/material';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
export default function AppFooter() {
  return (
    <Container className='bg-dark text-white bg-opacity-50' >
      <Box
        sx={{
          pt: 2,
          pb: 0,
          display: 'grid',
          gridAutoColumns: '1fr',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 4,
          gridTemplateColumns: { xs: '1fr', sm: '1fr', md: '1fr 1.75fr', lg: '1fr 1fr' },
          gridTemplateRows: 'auto',
          '& a:not(.MuiIconButton-root)': {
            mt: 1,
            color: 'text.secondary',
            typography: 'body2',
            '&:hover': {
              color: 'primary.main',
              textDecoration: 'underline',
            },
          },
        }}
      >
        <Box
        
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr 1fr', md: '1fr 2fr 0fr 1fr' },
            gridAutoColumns: '1fr',
            gap: 2,
          }}
        >
  
 
          <Box  sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography fontWeight="bold" variant="body2">
              Cursos
            </Typography>
            <Link className="text-white" href='/'>HTML</Link>
            <Link className="text-white" href="/">CSS</Link>
            <Link className="text-white" href="/">JAVASCRIPT</Link>
            <Link className="text-white" href="/">NODEJS</Link>
            <Link className="text-white" href="/">NEXTJS</Link>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography fontWeight="bold" variant="body2">
              Carreras
            </Typography>
            <Link className="text-white" href="/">FRONTEND</Link>
            <Link className="text-white" href="/">BACKEND</Link>
            <Box sx={{ display: 'flex', alignItems: 'end' }}>
              <Link className="text-white" href="/">FULL STACK</Link>
              <Box
                sx={(theme) => ({
                  px: 0.5,
                  py: '3px',
                  ml: 1,
                  mb: '1px',
                  borderRadius: 0.5,
                  fontSize: theme.typography.pxToRem(9),
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  color: '#fff',
                  letterSpacing: '0.1rem',
                  bgcolor: 'success.main',
                
                })}
              >
                MERN
              </Box>
            </Box>
    
            <Link className="text-white" target="_blank" rel="noopener noreferrer" href="mailto:sersenlinea@gmail.com">
              CONTACTANOS
            </Link>
          </Box>
        </Box>
      </Box>
      <Divider />
      <Box
        sx={{
          py: 4,
          display: { xs: 'block', sm: 'flex' },
          alignItems: { sm: 'center' },
          justifyContent: { sm: 'space-between' },
        }}
      >
        <Typography className="text-white"variant="dark">
          Copyright © {new Date().getFullYear()} Escuela Digital Arg.
        </Typography>
        <Box sx={{ py: { xs: 2, sm: 0 } }}>
          <Stack spacing={2} direction="row">
            <IconButton
            className="text-white"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/luisNavasArg"
              aria-label="github"
              title="GitHub"
              size="small"
            >
              <GitHubIcon fontSize="small" />
            </IconButton>
            
            <IconButton
            className="text-white"
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/lpipnavas"
              aria-label="twitter"
              title="Twitter"
              size="small"
            >
              <TwitterIcon fontSize="small" />
            </IconButton>
            <IconButton
            className="text-white"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/luis-navas-arg/"
              aria-label="linkedin"
              title="LinkedIn"
              size="small"
            >
              <LinkedInIcon fontSize="small" />
            </IconButton>
            <IconButton
            className="text-white"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/"
              aria-label="YouTube"
              title="YouTube"
              size="small"
            >
              <YouTubeIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}
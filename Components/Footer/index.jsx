import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import InstagramIcon from '@mui/icons-material/Instagram'
import PinterestIcon from '@mui/icons-material/Pinterest'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import MoreoverIcon from '../../src/assets/images/moreoverIcon.png'

const logoStyle = {
  width: '140px',
  height: 'auto',
}

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      {'© '}
      <Link href="https://mui.com/" color="inherit">
        Fashionista&nbsp;
      </Link>
      {new Date().getFullYear()}
    </Typography>
  )
}

export default function Footer() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: 'center', md: 'left' },
        backgroundColor: '#f8f9fa',
        borderTop: '1px solid #e0e0e0',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            minWidth: { xs: '100%', sm: '60%' },
          }}
        >
          <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
            <Box sx={{ ml: '-15px' }}>
              <img src={MoreoverIcon} style={logoStyle} alt="Fashionista logo" />
            </Box>

            <Typography variant="body2" color="text.secondary" mb={2}>
              Join our newsletter for the latest fashion trends and exclusive offers.
            </Typography>
            <Stack direction="row" spacing={1} useFlexGap>
              <TextField
                id="outlined-basic"
                hiddenLabel
                size="small"
                variant="outlined"
                fullWidth
                aria-label="Enter your email address"
                placeholder="Enter your email"
                inputProps={{
                  autoComplete: 'off',
                  'aria-label': 'Enter your email address',
                }}
              />
              <Button variant="contained" color="primary" sx={{ flexShrink: 0, backgroundColor: '#ff4081' }}>
                Subscribe
              </Button>
            </Stack>
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            Explore
          </Typography>
          <Link color="text.secondary" href="#">
            New Arrivals
          </Link>
          <Link color="text.secondary" href="#">
            Best Sellers
          </Link>
          <Link color="text.secondary" href="#">
            Sale
          </Link>
          <Link color="text.secondary" href="#">
            Gift Cards
          </Link>
          <Link color="text.secondary" href="#">
            Contact Us
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            Company
          </Typography>
          <Link color="text.secondary" href="#">
            About Us
          </Link>
          <Link color="text.secondary" href="#">
            Careers
          </Link>
          <Link color="text.secondary" href="#">
            Sustainability
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            Help
          </Typography>
          <Link color="text.secondary" href="#">
            Shipping & Returns
          </Link>
          <Link color="text.secondary" href="#">
            Size Guide
          </Link>
          <Link color="text.secondary" href="#">
            FAQ
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pt: { xs: 4, sm: 8 },
          width: '100%',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <div>
          <Link color="text.secondary" href="#">
            Privacy Policy
          </Link>
          <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
            &nbsp;•&nbsp;
          </Typography>
          <Link color="text.secondary" href="#">
            Terms of Service
          </Link>
          <Copyright />
        </div>
        <Stack
          direction="row"
          justifyContent="left"
          spacing={1}
          useFlexGap
          sx={{
            color: 'text.secondary',
          }}
        >
          <IconButton color="inherit" href="https://instagram.com" aria-label="Instagram" sx={{ alignSelf: 'center' }}>
            <InstagramIcon />
          </IconButton>
          <IconButton color="inherit" href="https://pinterest.com" aria-label="Pinterest" sx={{ alignSelf: 'center' }}>
            <PinterestIcon />
          </IconButton>
          <IconButton color="inherit" href="https://shopping.com" aria-label="Shopping" sx={{ alignSelf: 'center' }}>
            <ShoppingBagIcon />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  )
}

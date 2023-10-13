'use client'
import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { Button } from '@mui/material';
import CategoryMenu from './CategoryMenu';

const Categories = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };  
  return (
    <Grid container spacing={2} justifyContent='space-around' sx={{pl:2, pr:2, pt:4, pb:2}}>
      <Grid item>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          Woman
        </Button>
        <CategoryMenu anchorEl={anchorEl} open={open} handleClick={handleClick} handleClose={handleClose} />
      </Grid>
      <Grid item>
        <Typography variant="subtitle1">Man</Typography>
      </Grid>
      <Grid item>
        <Typography variant="subtitle1">Mother-Child</Typography>
      </Grid>
      <Grid item>
        <Typography variant="subtitle1">Home & Furniture</Typography>
      </Grid>
      <Grid item>
        <Typography variant="subtitle1">Super Market</Typography>
      </Grid>
      <Grid item>
        <Typography variant="subtitle1">Cosmetics</Typography>
      </Grid>
      <Grid item>
        <Typography variant="subtitle1">Shoe & Bag</Typography>
      </Grid>
      <Grid item>
        <Typography variant="subtitle1">Electronics</Typography>
      </Grid>
      <Grid item>
        <Typography variant="subtitle1">Sports & Outdoors</Typography>
      </Grid>
      <Grid item>
        <Typography variant="subtitle1">Best Seller</Typography>
      </Grid>
    </Grid>
  )
}

export default Categories
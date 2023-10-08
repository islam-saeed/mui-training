import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

const Categories = () => {
  return (
    <Grid container spacing={2} justifyContent='space-around' sx={{pl:2, pr:2, pt:4, pb:2}}>
      <Grid item>
        <Typography variant="subtitle1">Woman</Typography>
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
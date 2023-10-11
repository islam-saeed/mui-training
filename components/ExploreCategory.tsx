import React from 'react'
import Grid from '@mui/material/Grid'
import CategoryCard from './CategoryCard'

const ExploreCategory = () => {
  return (
    <Grid container spacing={3} justifyContent='center' alignItems='center' sx={{my:'100px'}}>
      <Grid item>
        <CategoryCard />
      </Grid>
      <Grid item>
        <CategoryCard />
      </Grid>
    </Grid>
  )
}

export default ExploreCategory
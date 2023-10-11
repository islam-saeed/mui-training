'use client'
import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { Card, CardContent, CardMedia } from '@mui/material'

const CategoryCard = () => {
  return (
    <Card sx={{display: 'flex'}}>
        <CardContent sx={{backgroundColor: '#BF2E3B', display: 'flex', justifyContent: 'center', alignItems: 'center', p:0}}>
            <Grid container spacing={3} justifyContent='center' direction='column' sx={{width:'350px',height:'400px', px: 3}}>
              <Grid item>
                    <Typography variant="h4" sx={{color:'white', fontWeight: 'bold'}}>
                        Never-Ending Summer
                    </Typography>
              </Grid>
              <Grid item>
                    <Typography variant="h5" sx={{color:'white'}}>
                        Throwback Shirts & all-day dressed
                    </Typography>
              </Grid>
              <Grid item>
                    <Typography variant="body1" sx={{color:'white', textDecoration: 'underline'}}>
                        Explore all category
                    </Typography>
              </Grid>
            </Grid>
        </CardContent>
        <CardMedia title="Category image" image="https://source.unsplash.com/random" sx={{width:'350px',height:'400px', m:0}} />
    </Card>
  )
}

export default CategoryCard
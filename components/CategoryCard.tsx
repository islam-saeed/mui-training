'use client'
import React, { useContext } from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { Card, CardContent, CardMedia } from '@mui/material'
import { widthContext } from '@/context/WidthContext'

const CategoryCard = () => {
  const pageWidth = useContext(widthContext)
  return (
    <Card sx={{display: 'flex'}}>
        <CardContent sx={{backgroundColor: '#BF2E3B', display: 'flex', justifyContent: 'center', alignItems: 'center', p:0}}>
            <Grid container spacing={3} justifyContent='center' direction='column' sx={{width: pageWidth ? pageWidth>900 ? "350px" : "200px" : "350px" ,height:pageWidth ? pageWidth>900 ? "400px" : "280px" : "400px", px: 3}}>
              <Grid item>
                    <Typography variant={pageWidth ? pageWidth>900 ? "h4" : "h6" : "h4"} sx={{color:'white', fontWeight: 'bold'}}>
                        Never-Ending Summer
                    </Typography>
              </Grid>
              <Grid item>
                    <Typography variant={pageWidth ? pageWidth>900 ? "h5" : "body2" : "h5"} sx={{color:'white'}}>
                        Throwback Shirts &amp; all-day dressed
                    </Typography>
              </Grid>
              <Grid item>
                    <Typography variant={pageWidth ? pageWidth>900 ? "body1" : "subtitle1" : "body1"} sx={{color:'white', textDecoration: 'underline'}}>
                        Explore all category
                    </Typography>
              </Grid>
            </Grid>
        </CardContent>
        <CardMedia title="Category image" image="https://source.unsplash.com/random" sx={{width: pageWidth ? pageWidth>900 ? "350px" : "150px" : "350px", height:pageWidth ? pageWidth>900 ? "400px" : "280px" : "400px", m:0}} />
    </Card>
  )
}

export default CategoryCard
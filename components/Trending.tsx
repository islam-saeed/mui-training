'use client'
import { Grid, Typography, Button } from '@mui/material'
import React from 'react'
import TrendingCard from './TrendingCard'
import { FaChevronRight } from 'react-icons/fa6'

const Trending = () => {
  return (
    <Grid container spacing={4} justifyContent='center' alignItems='center' sx={{my: 2}}>
        <Grid container justifyContent='space-between' alignItems='center' sx={{mx: 8, my: 3}}>
          <Grid item>
            <Typography variant="h3">
                Trending must-haves
            </Typography>
          </Grid>
          <Grid item>
            <Button variant="text" color='inherit'>
                View all <FaChevronRight />
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={5} justifyContent='center' alignItems='center' sx={{my: 2}}>
            <Grid item>
                <TrendingCard />
            </Grid>
            <Grid item>
                <TrendingCard />
            </Grid>
            <Grid item>
                <TrendingCard />
            </Grid>
        </Grid>
    </Grid>
  )
}

export default Trending
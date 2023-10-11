'use client'
import React from 'react'
import Grid from '@mui/material/Grid'
import TopCard from './TopCard'
import Typography from '@mui/material/Typography'
import { FaChevronRight } from 'react-icons/fa6'
import { Button } from '@mui/material'

const Top = () => {
  return (
    <Grid container spacing={4} justifyContent='center' alignItems='center' sx={{my: 2}}>
        <Grid container justifyContent='space-between' alignItems='center' sx={{mx: 8, my: 3}}>
          <Grid item>
            <Typography variant="h3">
                Top100
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
                <TopCard />
            </Grid>
            <Grid item>
                <TopCard />
            </Grid>
            <Grid item>
                <TopCard />
            </Grid>
            <Grid item>
                <TopCard />
            </Grid>
        </Grid>
    </Grid>
  )
}

export default Top
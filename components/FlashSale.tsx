'use client'
import React from 'react'
import Grid from '@mui/material/Grid'
import FlashSaleCard from './FlashSaleCard'
import Typography from '@mui/material/Typography'
import { FaChevronRight } from 'react-icons/fa6'
import { Button } from '@mui/material'



const FlashSale = () => {
  return (
    <Grid container spacing={4} justifyContent='center' alignItems='center' sx={{my: 2}}>
        <Grid container justifyContent='space-between' alignItems='center' sx={{mx: 8, my: 3}}>
          <Grid item>
            <Typography variant="h3">
                Flash Sales
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
                <FlashSaleCard />
            </Grid>
            <Grid item>
                <FlashSaleCard />
            </Grid>
            <Grid item>
                <FlashSaleCard />
            </Grid>
            <Grid item>
                <FlashSaleCard />
            </Grid>
        </Grid>
    </Grid>
  )
}

export default FlashSale
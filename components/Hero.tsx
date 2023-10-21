'use client'
import React, { useContext } from 'react'
import Grid from '@mui/material/Grid'
import Image from 'next/image'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Box } from '@mui/material'
import { widthContext } from '@/context/WidthContext'
import ExploreCategory from './ExploreCategory'


const Hero = () => {
    const pageWidth: number = useContext(widthContext)
    return (
        <div style={{height:'60vh'}}>
        {pageWidth && pageWidth>620 &&
            <Grid container spacing={0} alignItems='center'>
            <Grid item sm={4} position='relative' overflow='hidden' sx={{height:'100%'}}>
                <Box component='div' sx={{width:'30vw', height:'60vh'}}>
                    <Image src='https://source.unsplash.com/random' priority fill alt='offer image' />
                </Box>
            </Grid>
            <Grid item sm={8} overflow='hidden' sx={{height:'60vh'}}>
                <Grid container spacing={2} direction='column' sx={{backgroundColor: '#7CA8E9', color: 'white', height:'60vh', mt:0, pt:15, pb:15}} justifyContent='space-around' alignItems='center'>
                    <Typography variant={pageWidth>900 ? "h3" : "h4"}>Kimonos, Caftans &amp; Pareos</Typography>
                    <Typography variant={pageWidth>900 ? "h4" : "h5"}>Poolside glam included From $4.99</Typography>
                    <Button variant="contained" sx={{backgroundColor: '#4172DC', px:4, py:2}}>
                        Shop Now
                    </Button>
                </Grid>
            </Grid>
        </Grid>}
        {pageWidth && pageWidth<620 &&
            <ExploreCategory />
        }
        </div>
    )
}

export default Hero
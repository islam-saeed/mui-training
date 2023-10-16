'use client'
import React, { useContext, useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import Image from 'next/image'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Box } from '@mui/material'
import { widthContext } from '@/context/WidthContext'


const Hero = () => {
    const pageWidth = useContext(widthContext)
    return (
        <>
        {pageWidth>990 &&
            <Grid container spacing={0} alignItems='center'>
            <Grid item lg={4} position='relative' overflow='hidden' sx={{height:'60vh'}}>
                <Box component='div' sx={{width:'30vw', height:'60vh'}}>
                    <Image src='https://source.unsplash.com/random' fill alt='offer image' />
                </Box>
            </Grid>
            <Grid item lg={8} overflow='hidden' sx={{height:'60vh'}}>
                <Grid container spacing={2} direction='column' sx={{backgroundColor: '#7CA8E9', color: 'white', height:'60vh', mt:0, pt:15, pb:15}} justifyContent='space-around' alignItems='center'>
                    <Typography variant="h3">Kimonos, Caftans &amp; Pareos</Typography>
                    <Typography variant="h4">Poolside glam included From $4.99</Typography>
                    <Button variant="contained" sx={{backgroundColor: '#4172DC', px:4, py:2}}>
                        Shop Now
                    </Button>
                </Grid>
            </Grid>
        </Grid>}
        </>
    )
}

export default Hero
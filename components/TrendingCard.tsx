'use client'
import { Card, CardContent, CardMedia, createTheme, ThemeProvider, Typography, Grid, Button, Chip } from '@mui/material'
import React from 'react'
const theme=createTheme({
    palette: {
      mode: 'dark'
    }
})

const TrendingCard = () => {
  return (
    <ThemeProvider theme={theme}>
        <Card elevation={3} sx={{width: '400px', position:'relative'}}>
            <Chip label="New Arrivals" sx={{position: 'absolute', top: '10px', left: '10px', color: 'white', fontWeight:'bold'}} color='success' />
            <CardMedia title="Trending" image="https://source.unsplash.com/random" sx={{height: '350px'}} />
            <CardContent>
                <Grid container spacing={3} direction='row' alignItems='center' justifyContent='space-around' wrap='nowrap'>
                    <Grid item>
                        <Grid container spacing={2} direction='column'>
                            <Grid item>
                                <Typography variant="body1" sx={{fontWeight: 'bold'}}>Cool & Sexy Calvin Klein</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle2">Dotted dress-Casual</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" color='inherit' sx={{px:1.5, py:1}}>
                            $89&nbsp;&nbsp;&nbsp;Shop Now
                        </Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    </ThemeProvider>
  )
}

export default TrendingCard
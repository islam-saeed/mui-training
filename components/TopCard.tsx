'use client'
import { Card, CardContent, Grid, Typography, CardMedia } from '@mui/material'
import React from 'react'
import { FaStar, FaRegHeart } from 'react-icons/fa'

const TopCard = () => {
  return (
    <Card elevation={3} sx={{width: '300px', borderRadius: '8px'}}>
            <CardMedia title="Top" image="https://source.unsplash.com/random" sx={{height: '480px'}} />
            <CardContent>
                <Grid container justifyContent='space-between' alignItems='center'>
                    <Grid item>
                        <Typography sx={{ fontSize: 18, fontWeight: 'bold' }} color="initial" >
                            Tonny Black
                        </Typography>
                        <Typography sx={{ fontSize: 14, fontWeight: '700' }} color="text.secondary" >
                            Shoulder bag-white-plain
                        </Typography>
                    </Grid>
                    <Grid item>
                        <FaRegHeart style={{fontSize: '20px'}} />
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item>
                        <FaStar style={{color: '#FFA34D'}} />
                        <FaStar style={{color: '#FFA34D'}} />
                        <FaStar style={{color: '#FFA34D'}} />
                        <FaStar style={{color: '#FFA34D'}} />
                        <FaStar style={{color: '#FFA34D'}} />
                    </Grid>
                    <Grid item>
                        <Typography sx={{ fontSize: 18, fontWeight: 'bold', color: '#555' }}>
                            (289)
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={3} alignItems='center' >
                    <Grid item>
                        <Typography sx={{ fontSize: 18, fontWeight: 'bold', color: '#FF2E00' }} >
                            $228
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography sx={{ fontSize: 18, fontWeight: 'bold', color: '#555', textDecorationLine: 'line-through' }} variant='body2' >
                            $290
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography sx={{ fontSize: 14, fontWeight: 'bold', color: '#FF2E00'}} >
                            -10%
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
  )
}

export default TopCard
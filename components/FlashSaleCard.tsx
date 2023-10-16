'use client'
import { Box, Card, CardContent, Typography, Grid } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { FaStar } from 'react-icons/fa'

const FlashSaleCard = () => {
  return (
        <Card elevation={3} sx={{width: '300px', p:2, borderRadius: '8px'}}>
            <CardContent>
                <Grid container justifyContent='center' alignItems='center' direction='column' sx={{mb: 1}}>
                    <Typography sx={{ fontSize: 18, fontWeight: 'bold' }} color="text.secondary" >
                        DEAL OF THE DAY
                    </Typography>
                    <Typography sx={{ fontSize: 18, fontWeight: 'bold' }} color="initial" >
                        12 : 43 : 12
                    </Typography>
                    <Typography component='p' sx={{ fontSize: 12, fontWeight: 'bold' }} color="text.secondary" >
                        hour&nbsp;&nbsp;&nbsp;min&nbsp;&nbsp;&nbsp;sec
                    </Typography>
                </Grid>
                <Box component='div' sx={{mb: 1}}>
                    <Image src='https://source.unsplash.com/random' width={250} height={150} alt='flash sale image' />
                </Box>
                <Typography sx={{ fontSize: 18, fontWeight: 'bold' }} color="initial" >
                    Tonny Black
                </Typography>
                <Typography sx={{ fontSize: 14, fontWeight: '700' }} color="text.secondary" >
                    Shoulder bag-white-plain
                </Typography>
                <Grid container spacing={3}>
                    <Grid item>
                        <FaStar style={{color: '#FFA34D'}} />
                    </Grid>
                    <Grid item>
                        <Typography sx={{ fontSize: 18, fontWeight: 'bold', color: '#555' }}>
                            (54)
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={3} alignItems='center' >
                    <Grid item>
                        <Typography sx={{ fontSize: 18, fontWeight: 'bold', color: '#FF2E00' }} >
                            $69.99
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography sx={{ fontSize: 18, fontWeight: 'bold', color: '#555', textDecorationLine: 'line-through' }} variant='body2' >
                            $129.99
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography sx={{ fontSize: 14, fontWeight: 'bold', backgroundColor: '#FF2E00', px: 1.5, py: 0.5, color: 'white', borderRadius: '7px' }} >
                            -40%
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
  )
}

export default FlashSaleCard
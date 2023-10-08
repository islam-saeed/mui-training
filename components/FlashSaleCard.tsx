'use client'
import { Box, Card, CardContent, Paper, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { FaStar } from 'react-icons/fa'

const FlashSaleCard = () => {
  return (
    <Paper elevation={3} sx={{maxWidth: '300px', maxHeight: '380px'}}>
        <Card sx={{maxWidth: '300px', maxHeight: '380px'}}>
            <CardContent>
                <Typography sx={{ fontSize: 18, fontWeight: 'bold' }} color="text.secondary" gutterBottom>
                    DEAL OF THE DAY
                </Typography>
                <Typography sx={{ fontSize: 18, fontWeight: 'bold' }} color="initial" gutterBottom>
                    12 : 43 : 12
                </Typography>
                <Typography component='pre' sx={{ fontSize: 12, fontWeight: 'bold' }} color="text.secondary" gutterBottom>
                    hour    min    sec
                </Typography>
                <Box component='div'>
                    <Image src='https://source.unsplash.com/random' width={250} height={150} alt='flash sale image' />
                </Box>
                <Typography sx={{ fontSize: 18, fontWeight: 'bold' }} color="initial" gutterBottom>
                    Tonny Black
                </Typography>
                <Typography sx={{ fontSize: 18, fontWeight: 'bold' }} color="text.secondary" gutterBottom>
                    Shoulder bag-white-plain
                </Typography>
                <FaStar />
                
            </CardContent>
        </Card>
    </Paper>
  )
}

export default FlashSaleCard
'use client'
import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { Card, CardContent, CardMedia, Button } from '@mui/material'
import { styled } from '@mui/system';

const CustomButton = styled(Button)`
  &:hover {
    background-color: #F5F5F5;
    border-color: unset;
  }
`;

const ProductDetailsCard = () => {
  return (
    <Card sx={{display: 'flex', maxWidth:400}}>
        <CardMedia title="Product image" image="https://source.unsplash.com/random" sx={{width:150}} />
        <CardContent>
            <Grid container spacing={3} direction='column'>
              <Grid item>
                <Typography variant="h5" sx={{mb: 1}}>
                    Tonny Black
                </Typography>
              </Grid>
              <Grid item>
                <Grid container spacing={2} alignItems='center' >
                    <Grid item>
                        <Typography sx={{ fontSize: 16, fontWeight: 'bold', color: '#FF2E00' }} >
                            $69.99
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography sx={{ fontSize: 16, fontWeight: 'bold', color: '#555', textDecorationLine: 'line-through' }} variant='body2' >
                            $129.99
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography sx={{ fontSize: 12, fontWeight: 'bold', backgroundColor: '#FF2E00', px: 1.5, py: 0.5, color: 'white', borderRadius: '7px' }} >
                            -40%
                        </Typography>
                    </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <CustomButton variant="outlined" sx={{color: '#555', borderColor:'#555', px:2, py:1, width:'100%'}}>
                  $69.99  ADD TO CART
                </CustomButton>
              </Grid>
            </Grid>
        </CardContent>
    </Card>
  )
}

export default ProductDetailsCard
import React from 'react'
import Grid from '@mui/material/Grid'
import Image from 'next/image'
import Typography from '@mui/material/Typography'


const SlideOffer = () => {
  return (
    <Grid container spacing={5} justifyContent='center' alignItems='center' sx={{backgroundColor: '#F7DDD0'}} >
      <Grid item>
        <Grid container spacing={3} direction='column'>
          <Grid item>
            <Typography variant="h3">MagSafe</Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">Snap on a magnetic case, wallet, or both. And get faster wireless charging.</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Image src='https://source.unsplash.com/300x300' width={300} height={300} alt='offer' />
      </Grid>
    </Grid>
  )
}

export default SlideOffer
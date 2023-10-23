'use client'
import React, { useContext } from 'react'
import Grid from '@mui/material/Grid'
import Image from 'next/image'
import Typography from '@mui/material/Typography'
import { PiWarningOctagon } from 'react-icons/pi'
import { widthContext } from '@/context/WidthContext'

const NotFoundPage = () => {
  const pageWidth: number = useContext(widthContext)
  return (
    <Grid container spacing={5} justifyContent='center' alignItems='center'>
      <Grid item>
        <Image src='/7a9b95ddf51693c1d2fb0455dae1e528.png' width={pageWidth>620? pageWidth/2 : pageWidth-50 } height={pageWidth>620? 500 : 300 } alt='page not found' />
      </Grid>
      <Grid item sx={{display: 'flex', alignItems:'center', justifyContent: 'center'}}>
        <Grid container spacing={1} direction='column' sx={{border:'1px solid black', borderRadius:'8px', p:2, width:'80%'}}>
            <Grid item><Typography variant="h6">No Results Found</Typography></Grid>
            <Grid item><Typography variant="subtitle1" sx={{color:'#555'}}><PiWarningOctagon style={{color:'#FF7A00', fontSize:'24px', verticalAlign:'middle', marginRight:'5px'}}  />We recommend you to search different clear key words to get the best result.</Typography></Grid>
            <Grid item><Typography variant="subtitle1" sx={{color:'#555'}}><PiWarningOctagon style={{color:'#FF7A00', fontSize:'24px', verticalAlign:'middle', marginRight:'5px'}}  />You can see the most related purchased products bellow.</Typography></Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default NotFoundPage
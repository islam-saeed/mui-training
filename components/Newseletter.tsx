'use client'
import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import { BsSend } from 'react-icons/bs'
import { InputAdornment } from '@mui/material'

const Newseletter = () => {
    const [email, setEmail] = useState('')
  return (
    <Grid container spacing={5} justifyContent='center' alignItems='center' direction='column' sx={{
      backgroundColor:'#7296AB',
       borderRadius:'8px',
       width:'700px',
       height:'300px',
       color:'white',
       position: 'absolute',
       top:'-100px',
       left:'calc(50% - 300px)'
      }}>
      <Grid item>
        <Typography variant="h5">Luminae Store</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1">Register your email not to miss the last minutes off+ Free delivery</Typography>
      </Grid>
      <Grid item>
        <TextField
          id="newsletter-email"
          placeholder='Enter your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant='filled'
          InputProps={{
            endAdornment: (
                <InputAdornment position="end">
                    <BsSend />
                </InputAdornment>
            )
        }}
        />
      </Grid>
    </Grid>
  )
}

export default Newseletter
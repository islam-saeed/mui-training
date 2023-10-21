'use client'
import React, { useContext, useState } from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import { BsSend } from 'react-icons/bs'
import { GlobalStyles, InputAdornment } from '@mui/material'
import { widthContext } from '@/context/WidthContext'

const NewsletterStyles = <GlobalStyles styles={{
  '.css-1nydiq2-MuiGrid-root':{
    backgroundColor:'#7296AB',
    borderRadius:'8px',
    width:'700px !important',
    height:'300px',
    color:'white',
    position: 'absolute',
    top:'-100px',
    left:'calc(50% - 300px)'
  },
  '.css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root': {
    backgroundColor: 'white'
  }
}} />

const Newseletter = () => {
    const pageWidth: number = useContext(widthContext)
    const [email, setEmail] = useState('')
    return (
      <>
        {pageWidth && pageWidth>620 &&
        <Grid container spacing={5} justifyContent='center' alignItems='center' direction='column'>
          {NewsletterStyles}
          <Grid item>
            <Typography variant="h4">Luminae Store</Typography>
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
              InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <BsSend />
                    </InputAdornment>
                )
            }}
            />
          </Grid>
        </Grid>}
      </>
  )
}

export default Newseletter
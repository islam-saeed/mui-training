import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { FaHeart } from "react-icons/fa6";






const ProductOptions = () => {
  return (
    <Grid container spacing={3} direction='column'>
      <Grid item>
        <Grid container spacing={3}>
          <Grid item>
            <Typography variant="h5" >SHORT PRINTED DRESS</Typography>
            <Typography variant="subtitle1">$39.99</Typography>
          </Grid>
          <Grid item>
            <Grid container justifyContent='center' alignItems='center' sx={{color:'#BCBFC2', border:'1px solid #D9DADB', borderRadius:'50%', width:'40px', height:'40px'}}>
                <FaHeart />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container spacing={3} alignItems='center'>
          <Grid item>
            <Typography variant="body1" sx={{fontWeight:'bold'}}>Size</Typography>
          </Grid>
          <Grid item>
            <Grid container spacing={3}>
              {['2XS', 'XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'].map((size) => {
                return (
                  <Grid item key={size}><div style={{width:'60px', height:'40px',cursor:'pointer', borderRadius: '8px', border: '1px solid #D9D9D9', color:'#555555', fontWeight:'bold', display:'flex', justifyContent:'center', alignItems:'center'}}>{size}</div></Grid>
                  )
              })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container spacing={3} alignItems='center'>
          <Grid item>
            <Typography variant="body1" sx={{fontWeight:'bold'}}>Color</Typography>
          </Grid>
          <Grid item>
            <Grid container spacing={3}>
              {['#FF2E00', '#F7DDD0', '#66A5FF', '#FF9D41'].map((color) => {
                if(color==='#FFF'){
                return (
                  <Grid item key={color}><div style={{width:'40px', height:'40px',cursor:'pointer', backgroundColor: color, borderRadius: '50%', border: '1px solid #D9D9D9'}}></div></Grid>
                  )
                } else {
                  return (
                    <Grid item key={color}><div style={{width:'40px', height:'40px',cursor:'pointer', backgroundColor: color, borderRadius: '50%'}}></div></Grid>
                    )
                  }
              })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>

      </Grid>
      <Grid item>

      </Grid>
      <Grid item>

      </Grid>
      <Grid item>

      </Grid>
    </Grid>
  )
}

export default ProductOptions
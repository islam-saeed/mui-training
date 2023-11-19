'use client'
import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { FaHeart } from "react-icons/fa6";
import { MenuItem, TextField, InputAdornment } from '@mui/material';


type shippingOptions = {
  value: string,
  label: string,
  deliveryTime: string
}

const shipping:Array<shippingOptions> = [
  {
    value: 'Free Shipping to Victoria teritory',
    label: 'Free Shipping to Victoria teritory',
    deliveryTime: "14-17 days"
  }
];

const ProductOptions = () => {
  const [quantity, setQuantity] = useState('1')
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
        <Grid container spacing={3} alignItems='center'>
          <Grid item>
          <Typography variant="body1" sx={{fontWeight:'bold'}}>Shipping</Typography>
          </Grid>
          <Grid item>
            <TextField
                id="outlined-select-shipping"
                select
                defaultValue="Free Shipping to Victoria teritory"
                variant="standard"
                sx={{
                  p:1,
                  border: 'none'
                }}
                InputProps={{
                    disableUnderline: true,
                }}
                >
                {shipping.map((option:shippingOptions) => (
                    <MenuItem key={option.value} value={option.value}>
                    <Typography variant="body1" sx={{fontWeight:'bold'}}>{option.label}</Typography>
                    <Typography variant="subtitle1" sx={{fontWeight:'bold', color:'#9D9D9D'}}>Delivery Time: {option.deliveryTime}</Typography>
                    </MenuItem>
                ))}
            </TextField>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container spacing={3} alignItems='center'>
          <Grid item>
            <Typography variant="body1" sx={{fontWeight:'bold'}}>Quantity</Typography>
          </Grid>
          <Grid item>
            <TextField
                id="product-quantity"
                value={quantity}
                onChange={(e:any) => setQuantity(e.target.value)}
                sx={{
                  width: '100px',
                  border: '1px solid #D9D9D9',
                  borderRadius: '5px',
                  color: '#555555',
                  fontWeight: 'bold',
                }}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                          <Typography onClick={()=>setQuantity((prev)=>String(parseInt(prev, 10)+1))} variant="subtitle1" sx={{fontWeight:'bold', fontSize:'22px', color:'#C4C4C4', cursor:'pointer'}}>+</Typography>
                        </InputAdornment>
                    ),
                    startAdornment: (
                        <InputAdornment position="start">
                          <Typography onClick={()=>setQuantity((prev)=>prev === '0' ? '0' : String(parseInt(prev, 10)-1))} variant="subtitle1" sx={{fontWeight:'bold', fontSize:'22px', color:'#C4C4C4', cursor:'pointer'}}>-</Typography>
                        </InputAdornment>
                    )
                }}
            />
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" sx={{fontWeight:'bold'}}>50 available / 104 sold</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>

      </Grid>
      <Grid item>

      </Grid>
    </Grid>
  )
}

export default ProductOptions
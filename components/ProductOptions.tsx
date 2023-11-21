'use client'
import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { FaHeart, FaPlus, FaMinus } from "react-icons/fa6";
import { MenuItem, TextField, InputAdornment, Divider, Button } from '@mui/material';
import { styled } from '@mui/system';

const CustomButton = styled(Button)`
  &:hover {
    background-color: #F5F5F5;
    border-color: unset;
  }
`;

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
                          <Typography onClick={()=>setQuantity((prev)=>String(parseInt(prev, 10)+1))} variant="subtitle1" sx={{fontWeight:'bold', fontSize:'15px', color:'#C4C4C4', cursor:'pointer'}}><FaPlus /></Typography>
                        </InputAdornment>
                    ),
                    startAdornment: (
                        <InputAdornment position="start">
                          <Typography onClick={()=>setQuantity((prev)=>prev === '0' ? '0' : String(parseInt(prev, 10)-1))} variant="subtitle1" sx={{fontWeight:'bold', fontSize:'15px', color:'#C4C4C4', cursor:'pointer'}}><FaMinus /></Typography>
                        </InputAdornment>
                    )
                }}
            />
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" sx={{fontWeight:'bold', color:'#555'}}>50 available / 104 sold</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
          <Grid container direction='column' justifyContent='space-around' sx={{backgroundColor:'#E9E9E9', py:1, px:2, height: 90}}>
            <Grid item>
              <Typography variant="subtitle1" sx={{fontWeight:'bold'}}>$79.98</Typography>
            </Grid>
            <Grid item>
              <Divider sx={{ height: 3 }} orientation="horizontal" />
            </Grid>
            <Grid item>
              <Grid container spacing={1}>
                <Grid item>
                  <div  style={{width:'20px', height:'20px', backgroundColor:'#c4c4c4', color:'white', borderRadius:'50%', display:'flex', justifyContent:'center', alignItems:'center'}}><FaPlus /></div>
                </Grid>
                <Grid item>
                  <Typography variant="body2" sx={{fontWeight:'bold', fontSize:'12px', color:'#555'}}>Add shipping insurance for $9( declared value  only if the package gets lost, stolen or damaged.)</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
      </Grid>
      <Grid item>
        <Grid container spacing={3}>
          <Grid item>
            <Button variant="contained" sx={{backgroundColor: '#4172DC', px:4, py:2}}>
              SHOP NOW
            </Button>
          </Grid>
          <Grid item>
            <CustomButton variant="outlined" sx={{color: '#555', borderColor:'#555', px:4, py:2}}>
              ADD TO CART
            </CustomButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ProductOptions
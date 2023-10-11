'use client'
import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { MenuItem, TextField } from '@mui/material';
import Image from 'next/image';
import {FaFacebookF, FaTelegramPlane} from "react-icons/fa"
import {AiFillInstagram} from "react-icons/ai"
import Newseletter from './newseletter';



type keyValuePair = {
    value: string,
    label: string
}

const languages:Array<keyValuePair> = [
    {
      value: 'English',
      label: 'English'
    }
  ];



const Footer = () => {
  return (
    <footer style={{position:'relative'}}>
        <Newseletter />
        <Grid container spacing={15} justifyContent='center' sx={{backgroundColor:'#D1E2EB', height:'360px', mt:'200px'}}>
          <Grid item>
            <Typography variant="h6" sx={{mb:'20px'}}>Company</Typography>
            <Typography variant="subtitle1"  sx={{my:'10px'}}>About Us</Typography>
            <Typography variant="subtitle1"  sx={{my:'10px'}}>Our Store</Typography>
            <Typography variant="subtitle1"  sx={{my:'10px'}}>Contact us</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" sx={{mb:'20px'}}>Career Opportunities</Typography>
            <Typography variant="subtitle1"  sx={{my:'10px'}}>Selling Programs</Typography>
            <Typography variant="subtitle1"  sx={{my:'10px'}}>Advertise</Typography>
            <Typography variant="subtitle1"  sx={{my:'10px'}}>Cooperation </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" sx={{mb:'20px'}}>How to Buy</Typography>
            <Typography variant="subtitle1"  sx={{my:'10px'}}>Making Payments</Typography>
            <Typography variant="subtitle1"  sx={{my:'10px'}}>Delivery Options</Typography>
            <Typography variant="subtitle1"  sx={{my:'10px'}}>Buyer Protection</Typography>
            <Typography variant="subtitle1"  sx={{my:'10px'}}>New User Guide</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" sx={{mb:'20px'}}>Help</Typography>
            <Typography variant="subtitle1"  sx={{my:'10px'}}>Contacts Us</Typography>
            <Typography variant="subtitle1"  sx={{my:'10px'}}>FAQ</Typography>
            <Typography variant="subtitle1"  sx={{my:'10px'}}>Privacy Policy</Typography>
          </Grid>
        </Grid>
        <Grid container justifyContent='space-between' alignItems='center' sx={{p:3, borderBottom:'2px solid #d9d9d9', mb:5}}>
          <Grid item sx={{pt:2}}>
            <Grid container spacing={3}>
              <Grid item>
                <Image src='/f138bbe0cee569124e01a000a28754c8.png' width={60} height={20} alt='Visa' />
              </Grid>
              <Grid item>
                <Image src='/9658ed882ce0252d0c52f03601d527b4.png' width={40} height={30} alt='MasterCard' />
              </Grid>
              <Grid item>
                <Image src='/f942117d25152979ff1950160446f77e.png' width={70} height={20} alt='PayPal' />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <TextField
                id="languages-selection"
                select
                defaultValue="English"
                variant="standard"
                sx={{
                    p:1,
                    border: 'none'
                }}
                InputProps={{
                    disableUnderline: true,
                }}
                
                >
                {languages.map((option:keyValuePair) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
            </TextField>
          </Grid>
        </Grid>
        <Grid container justifyContent='space-between' alignItems='center' sx={{p:3}}>
            <Grid item>
                <Typography variant="body1">165-179 Forster Road City of Monash, Melbourne, Australia</Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1">©2023 Copyright in reserved for lumine shop</Typography>
            </Grid>
            <Grid item>
                <Grid container spacing={3}>
                    <Grid item><AiFillInstagram style={{fontSize: '20px'}} /></Grid>
                    <Grid item><FaFacebookF style={{fontSize: '20px'}} /></Grid>
                    <Grid item><FaTelegramPlane style={{fontSize: '20px'}} /></Grid>
                </Grid>
            </Grid>
        </Grid>
    </footer>
  )
}

export default Footer
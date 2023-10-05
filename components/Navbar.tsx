'use client'
import React, { useState } from 'react'
import { CssBaseline, AppBar, Toolbar, Typography, Box, Button, Grid, TextField, InputAdornment, Select, MenuItem, InputLabel, InputBase, IconButton, Divider } from "@/node_modules/@mui/material/index";
import Image from "@/node_modules/next/image";
import logo from '../public/Logo.png';
import SearchIcon from '@mui/icons-material/Search';
import {AiFillInstagram} from "react-icons/ai"
import {FaFacebookF, FaTelegramPlane} from "react-icons/fa"


type keyValuePair = {
    value: string,
    label: string
}

const currencies:Array<keyValuePair> = [
    {
      value: 'All Categories',
      label: 'All Categories',
    },
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];

const Navbar = () => {
    const [searchText, setSearchText] = useState('')
    const [category, setCategory] = useState('All Categories')
  return (
    <>
        <CssBaseline />
        <AppBar position="fixed" style={{
                backgroundColor: 'white',
                color:"black"
            }}>
            <Toolbar sx={{p:2}}>
                <Grid container spacing={2} alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Grid container spacing={2} alignItems="center">
                            <Image src={logo} width={50} height={30} alt='logo' style={{marginRight: "10px"}}/>
                            <Typography variant="h5" style={{fontWeight: '700'}}>
                                Luminae
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item >
                        <TextField
                            id="search-products"
                            label="Search Products"
                            value={searchText}
                            onChange={(e:any) => setSearchText(e.target.value)}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <TextField
                                            id="outlined-select-currency"
                                            select
                                            defaultValue="All Categories"
                                            variant="standard"
                                            InputProps={{
                                                disableUnderline: true,
                                                width:'200px',
                                                border: 'none'
                                            }}
                                            >
                                            {currencies.map((option:keyValuePair) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                        <Divider sx={{ height: 28, m: 1 }} orientation="vertical" />
                                        <SearchIcon />
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Grid>
                    <Grid item>
                        <Grid container spacing={3}>
                          <Grid item>
                            <Typography variant="body1">About us</Typography>
                          </Grid>
                          <Grid item>
                            <Typography variant="body1">Blog</Typography>
                          </Grid>
                          <Grid item>
                            <Typography variant="body1">Contact Us</Typography>
                          </Grid>
                          <Grid item>
                            <Typography variant="body1">Help & support</Typography>
                          </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container spacing={3}>
                          <Grid><AiFillInstagram /></Grid>
                          <Grid><FaFacebookF /></Grid>
                          <Grid><FaTelegramPlane /></Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    </>
  )
}

export default Navbar
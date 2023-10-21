'use client'
import React, { useContext, useState } from 'react'
import { CssBaseline, AppBar, Toolbar, InputAdornment, MenuItem, Divider, Drawer, Box, List, ListItem, ListItemButton, ListItemText } from "@/node_modules/@mui/material/index";
import Image from "@/node_modules/next/image";
import logo from '../public/Logo.png';
import SearchIcon from '@mui/icons-material/Search';
import {AiFillInstagram} from "react-icons/ai"
import {FaFacebookF, FaTelegramPlane, FaRegHeart} from "react-icons/fa"
import {FaRegUser} from "react-icons/fa6"
import {FiMenu} from "react-icons/fi"
import {BsBag} from "react-icons/bs"
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography'
import { widthContext } from '@/context/WidthContext';










type keyValuePair = {
    value: string,
    label: string
}

const theme=createTheme({
  palette: {
    mode: 'dark'
  }
})

const categories:Array<keyValuePair> = [
    {
      value: 'All Categories',
      label: 'All Categories',
    }
  ];
const currencies:Array<keyValuePair> = [
    {
      value: 'USD',
      label: 'USD',
    },
    {
      value: 'EUR',
      label: 'EUR',
    },
    {
      value: 'BTC',
      label: 'BTC',
    },
    {
      value: 'JPY',
      label: 'JPY',
    },
  ];
const languages:Array<keyValuePair> = [
    {
      value: 'English',
      label: 'English'
    }
  ];

const Navbar = () => {
    const pageWidth: number = useContext(widthContext)
    const [searchText, setSearchText] = useState('')
    const [anchor, setAnchor] = useState(false)
    const [category, setCategory] = useState('All Categories')
    const [currency, setCurrency] = useState('USD')
  return (
    <>
        <CssBaseline />
        {pageWidth && pageWidth>620 &&
        <AppBar position="sticky" style={{
                backgroundColor: 'white',
                color:"black"
            }}>
            <Toolbar sx={{p:2, pb:5}}>
                  <Grid container spacing={2} alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Grid container spacing={2} alignItems="center" sx={{pt:2}}>
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
                                            sx={{
                                              p:1,
                                              border: 'none'
                                            }}
                                            InputProps={{
                                                disableUnderline: true,
                                            }}
                                            >
                                            {categories.map((option:keyValuePair) => (
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
                          <Grid item><AiFillInstagram /></Grid>
                          <Grid item><FaFacebookF /></Grid>
                          <Grid item><FaTelegramPlane /></Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Toolbar>
            <ThemeProvider theme={theme}>
              <Grid container spacing={2} alignItems='center' justifyContent='space-around' sx={{backgroundColor: '#262626', color:'white'}}>
                <Grid item>
                    <Grid container spacing={3} alignItems='center'>
                        <Grid item>
                            <Grid container spacing={1} direction='row' alignItems='center' sx={{pb:1}}>
                              <Image src='categories.svg' alt='categories' width={25} height={25} />
                              <Typography variant="h5" sx={{color:'white'}}>Categories</Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                          <TextField
                            id="currencies-selection"
                            select
                            defaultValue="USD"
                            variant="standard"
                            sx={{
                              pb:2,
                              border: 'none'
                            }}
                            InputProps={{
                                disableUnderline: true,
                            }}
                          >
                            {currencies.map((option:keyValuePair) => (
                                <MenuItem key={option.value} value={option.value}>
                                {option.label}
                                </MenuItem>
                            ))}
                          </TextField>
                        </Grid>
                        <Grid item>
                          <TextField
                            id="languages-selection"
                            select
                            defaultValue="English"
                            variant="standard"
                            sx={{
                              pb:2,
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
                </Grid>
                {pageWidth && pageWidth>1060 && <Grid item>
                  <Grid container spacing={3}>
                    <Grid item>
                      <Image src='/Men cosmetic.png' width={50} height={50} alt='discount' />
                    </Grid>
                    <Grid item>
                        <Typography variant="h6">Weekly Men&apos;s Toiletries Coupons.</Typography>
                        <Typography variant="subtitle2">We extend exclusive discounts to our male clientele</Typography>
                    </Grid>
                  </Grid>
                </Grid>}
                <Grid item>
                  <Grid container spacing={10} alignItems='center'>
                    <Grid item>
                      <Grid container spacing={3} alignItems='center' direction='row' sx={{pt:1}}>
                        <FaRegUser />
                        <Typography variant="body1" sx={{ml:1}}>Sign in</Typography>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Grid container spacing={3} alignItems='center' direction='row' sx={{pt:1}}>
                        <FaRegHeart />
                        <Typography variant="body1" sx={{ml:1}}>Favorites</Typography>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Grid container spacing={3} alignItems='center' direction='row' sx={{pt:1}}>
                        <BsBag />
                        <Typography variant="body1" sx={{ml:1}}>Cart</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </ThemeProvider>
        </AppBar>}
        {pageWidth && pageWidth<620 &&
          <nav>
            <Grid container spacing={2} direction='column'>
              <Grid item>
                <Grid container justifyContent='space-between' alignItems='center' sx={{p:3}}>
                  <Grid item>
                    <FiMenu onClick={() => setAnchor(true)} style={{fontSize:'20px'}} />
                    <Drawer
                      anchor='left'
                      open={anchor}
                      onClose={() => setAnchor(false)}
                    >
                      <Box
                        sx={{ width: 250 }}
                        role="presentation"
                      >
                        <List>
                          {['About us', 'Blog', 'Help & Support'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                              <ListItemButton>
                                <ListItemText primary={text} />
                              </ListItemButton>
                            </ListItem>
                          ))}
                        </List>
                      </Box>
                    </Drawer>
                  </Grid>
                  <Grid item>
                    <Grid container spacing={2} alignItems="center" sx={{pt:2}}>
                        <Image src={logo} width={50} height={30} alt='logo' style={{marginRight: "10px"}}/>
                        <Typography variant="h5" style={{fontWeight: '700'}}>
                            Luminae
                        </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <BsBag style={{fontSize:'20px'}} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container justifyContent='center' sx={{pb:2}}>
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
                                      sx={{
                                        p:1,
                                        border: 'none'
                                      }}
                                      InputProps={{
                                          disableUnderline: true,
                                      }}
                                      >
                                      {categories.map((option:keyValuePair) => (
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
              </Grid>
            </Grid>
          </nav>}
    </>
  )
}

export default Navbar
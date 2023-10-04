import React from 'react'
import { CssBaseline, AppBar, Toolbar, Typography, Box, Button } from "@/node_modules/@mui/material/index";
import Image from "@/node_modules/next/image";
import logo from '../public/Logo.png';
import Grid from '@mui/material/Grid'

const Navbar = () => {
  return (
    <>
        <CssBaseline />
        <AppBar position="fixed" style={{
                backgroundColor: 'white',
                color:"black"
            }}>
            <Toolbar>
                <Grid container spacing={2}>
                    <Grid item >
                        <Image src={logo} width={50} height={30} alt='logo' />
                    </Grid>
                    <Grid item >
                        <Typography variant="h5" style={{fontWeight: '700'}}>
                            Luminae
                        </Typography>
                    </Grid>
                    <Grid item >
                        <Box component="span" sx={{ p: 2, border: '1px solid grey' }}>
                            
                        </Box>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    </>
  )
}

export default Navbar
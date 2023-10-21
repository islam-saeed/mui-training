'use client'
import React from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid'
import Image from 'next/image';
import { Typography } from '@mui/material';

type MenuProps = {
  anchorEl: null | HTMLElement,
  open: boolean,
  handleClose: () => void
}


const CategoryMenu = ({anchorEl, open, handleClose}:MenuProps) => {
  return (
    <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Grid container spacing={5} sx={{p:5}}>
          <Grid item>
            <Grid container spacing={3}>
              <Grid item>
                <Grid container spacing={6} direction='column'>
                  <Grid item>
                    <Typography variant="h6" sx={{mb:'10px', pl:2}}>Shoe &amp; Bag</Typography>
                    <MenuItem onClick={handleClose}>Casual Shoes</MenuItem>
                    <MenuItem onClick={handleClose}>Boots</MenuItem>
                    <MenuItem onClick={handleClose}>Sandals</MenuItem>
                    <MenuItem onClick={handleClose}>Slippers</MenuItem>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" sx={{mb:'10px', pl:2}}>Luxury &amp; designer</Typography>
                    <MenuItem onClick={handleClose}>Towels</MenuItem>
                    <MenuItem onClick={handleClose}>Bathroom Scales</MenuItem>
                    <MenuItem onClick={handleClose}>Bath Mats</MenuItem>
                    <MenuItem onClick={handleClose}>Shower Caps</MenuItem>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container spacing={6} direction='column'>
                  <Grid item>
                    <Typography variant="h6" sx={{mb:'10px', pl:2}}>Home Textile</Typography>
                    <MenuItem onClick={handleClose}>Bedding</MenuItem>
                    <MenuItem onClick={handleClose}>Pillows</MenuItem>
                    <MenuItem onClick={handleClose}>Handkerchief Towels</MenuItem>
                    <MenuItem onClick={handleClose}>Curtain</MenuItem>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" sx={{mb:'10px', pl:2}}>Cosmetics</Typography>
                    <MenuItem onClick={handleClose}>Shampoo and Conditioner</MenuItem>
                    <MenuItem onClick={handleClose}>Styling Products</MenuItem>
                    <MenuItem onClick={handleClose}>Hair Accessories</MenuItem>
                    <MenuItem onClick={handleClose}>Men&apos;s Grooming</MenuItem>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container spacing={6} direction='column'>
                  <Grid item>
                    <Typography variant="h6" sx={{mb:'10px', pl:2}}>Party Supplies</Typography>
                    <MenuItem onClick={handleClose}>Event &amp; Party</MenuItem>
                    <MenuItem onClick={handleClose}>Christmas</MenuItem>
                    <MenuItem onClick={handleClose}>Artificial Decorations</MenuItem>
                    <MenuItem onClick={handleClose}>Wedding</MenuItem>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" sx={{mb:'10px', pl:2}}>Sport &amp; Outdoors</Typography>
                    <MenuItem onClick={handleClose}>Team Sports</MenuItem>
                    <MenuItem onClick={handleClose}>Water Sports</MenuItem>
                    <MenuItem onClick={handleClose}>Outdoor Recreation</MenuItem>
                    <MenuItem onClick={handleClose}>Fitness Equipment</MenuItem>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="h6" sx={{mb:'10px', pl:2}}>Clothes</Typography>
                <MenuItem onClick={handleClose}>Bottoms</MenuItem>
                <MenuItem onClick={handleClose}>Women&apos;s Clothing</MenuItem>
                <MenuItem onClick={handleClose}>T-Shirts and Tops</MenuItem>
                <MenuItem onClick={handleClose}>Dresses</MenuItem>
                <MenuItem onClick={handleClose}>Outerwear</MenuItem>
                <MenuItem onClick={handleClose}>Formal Wear</MenuItem>
                <MenuItem onClick={handleClose}>Casual Wear</MenuItem>
                <MenuItem onClick={handleClose}>Seasonal Collections</MenuItem>
                <MenuItem onClick={handleClose}>Sports Bras</MenuItem>
                <MenuItem onClick={handleClose}>Workout Tops</MenuItem>
                <MenuItem onClick={handleClose}>Fall Wardrobe</MenuItem>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Image src='https://source.unsplash.com/278x340' width={278} height={340} alt='offer' />
          </Grid>
        </Grid>
      </Menu>
  )
}

export default CategoryMenu
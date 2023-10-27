import { Menu, Grid, MenuItem, Typography, Button } from '@mui/material'
import Image from 'next/image'
import React from 'react'

type MenuProps = {
    anchorEl: null | HTMLElement,
    open: boolean,
    handleClose: () => void
  }

const CartDropdown = ({anchorEl, open, handleClose}:MenuProps) => {
  return (
    <>
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
            >
            <MenuItem><CartDropdownItem /></MenuItem>
            <MenuItem><CartDropdownItem /></MenuItem>
            <MenuItem><CartDropdownItem /></MenuItem>
            <Grid container spacing={3} sx={{ml:1, mb:1}}>
            <Grid item>
                <Typography variant="subtitle1" sx={{fontWeight: 'bold'}}>Total:</Typography>
            </Grid>
            <Grid item>
                <Typography variant="subtitle2">$101.70</Typography>
            </Grid>
            </Grid>
            <Grid container spacing={1} sx={{ml:1, mb:1}}>
                <Grid item>
                    <Button variant="contained" color="primary">
                        View Bag
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="outlined" color="primary">
                        Checkout
                    </Button>
                </Grid>
            </Grid>
        </Menu>
    </>
  )
}

const CartDropdownItem = () => {
    return(
        <Grid container spacing={4}>
          <Grid item>
            <Image src='https://source.unsplash.com/random' alt='cart item image' width={35} height={60} />
          </Grid>
          <Grid item>
            <Grid container  direction='column'>
              <Grid item>
                <Typography variant="h6">Short Mango top</Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">$33.90</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
    )
}

export default CartDropdown
'use client'
import React, { useContext } from 'react'
import Grid from '@mui/material/Grid'
import { Button } from '@mui/material';
import CategoryMenu from './CategoryMenu';
import { widthContext } from '@/context/WidthContext';



const Categories = () => {
  const pageWidth: number = useContext(widthContext)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
    {pageWidth && pageWidth>990 && 
    <Grid container spacing={1} justifyContent='space-around' sx={{pl:2, pr:2, pt:4, pb:2}}>
      <Grid item>
        <Button
          id="basic-button-woman"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={{
            color:'black',
            textDecoration:'none',
            p:0,
            fontWeight:400,
            fontSize:'1rem',
            textTransform:'none',
            minWidth:'unset',
            letterSpacing:'unset'
          }}
          >
          Woman
        </Button>
        <CategoryMenu anchorEl={anchorEl} open={open} handleClose={handleClose} />
      </Grid>
      <Grid item>
        <Button
          id="basic-button-man"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={{
            color:'black',
            textDecoration:'none',
            p:0,
            fontWeight:400,
            fontSize:'1rem',
            textTransform:'none',
            minWidth:'unset',
            letterSpacing:'unset'
          }}
          >
            Man
          </Button>
      </Grid>
      <Grid item>
        <Button
          id="basic-button-mother-child"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={{
            color:'black',
            textDecoration:'none',
            p:0,
            fontWeight:400,
            fontSize:'1rem',
            textTransform:'none',
            minWidth:'unset',
            letterSpacing:'unset'
          }}
          >
            Mother-Child
          </Button>
      </Grid>
      <Grid item>
        <Button
          id="basic-button-home-furniture"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={{
            color:'black',
            textDecoration:'none',
            p:0,
            fontWeight:400,
            fontSize:'1rem',
            textTransform:'none',
            minWidth:'unset',
            letterSpacing:'unset'
          }}
          >
            Home &amp; Furniture
          </Button>
      </Grid>
      <Grid item>
        <Button
          id="basic-button-supermarket"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={{
            color:'black',
            textDecoration:'none',
            p:0,
            fontWeight:400,
            fontSize:'1rem',
            textTransform:'none',
            minWidth:'unset',
            letterSpacing:'unset'
          }}
          >
            Super Market
          </Button>
      </Grid>
      <Grid item>
        <Button
          id="basic-button-cosmetics"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={{
            color:'black',
            textDecoration:'none',
            p:0,
            fontWeight:400,
            fontSize:'1rem',
            textTransform:'none',
            minWidth:'unset',
            letterSpacing:'unset'
          }}
          >
            Cosmetics
          </Button>
      </Grid>
      <Grid item>
        <Button
          id="basic-button-shoe-bag"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={{
            color:'black',
            textDecoration:'none',
            p:0,
            fontWeight:400,
            fontSize:'1rem',
            textTransform:'none',
            minWidth:'unset',
            letterSpacing:'unset'
          }}
          >
            Shoe &amp; Bag
          </Button>
      </Grid>
      <Grid item>
        <Button
          id="basic-button-electronics"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={{
            color:'black',
            textDecoration:'none',
            p:0,
            fontWeight:400,
            fontSize:'1rem',
            textTransform:'none',
            minWidth:'unset',
            letterSpacing:'unset'
          }}
          >
            Electronics
          </Button>
      </Grid>
      <Grid item>
        <Button
          id="basic-button-sports-outdoors"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={{
            color:'black',
            textDecoration:'none',
            p:0,
            fontWeight:400,
            fontSize:'1rem',
            textTransform:'none',
            minWidth:'unset',
            letterSpacing:'unset'
          }}
          >
            Sports &amp; Outdoors
          </Button>
      </Grid>
      <Grid item>
        <Button
          id="basic-button-bestseller"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={{
            color:'black',
            textDecoration:'none',
            p:0,
            fontWeight:400,
            fontSize:'1rem',
            textTransform:'none',
            minWidth:'unset',
            letterSpacing:'unset'
          }}
          >
            Best Seller
          </Button>
      </Grid>
    </Grid>
    }
    </>
  )
}

export default Categories
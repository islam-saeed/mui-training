'use client'
import { Typography, Grid, TextField, InputAdornment, ListItem, ListItemButton, ListItemText, List, Checkbox, ListItemIcon, Box, Slider, Drawer } from '@mui/material'
import React, { useContext, useState } from 'react'
import { BiCategoryAlt } from 'react-icons/bi'
import SearchIcon from '@mui/icons-material/Search';
import { widthContext } from '@/context/WidthContext';

function valuetext(value: number) {
  return `$${value}`;
}

const SideFilter = () => {

  const pageWidth: number = useContext(widthContext)

  const [checked, setChecked] = useState([0]);
  const [anchor, setAnchor] = useState(false)


  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };



  /* slider */

  const [value, setValue] = React.useState<number[]>([20, 37]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };


  const filterTypes = () => {
    return (
      <Grid container spacing={4} direction='column' sx={{pl:1, maxWidth:'30%'}}>
          <Grid item>
              <Grid container spacing={1} alignItems='center'>
                <Grid item>
                  <BiCategoryAlt />
                </Grid>
                <Grid item>
                  <Typography variant="h5">Categories</Typography>
                </Grid>
              </Grid>
          </Grid>
          <Grid item>
              <TextField
                  id="search-brands"
                  label="Brand"
                  InputProps={{
                      endAdornment: (
                          <InputAdornment position="end">
                              <SearchIcon />
                          </InputAdornment>
                      )
                  }}
              />
          </Grid>
          <Grid item>
            <Typography variant="h5">Models</Typography>
            <List>
              <ListItem disablePadding secondaryAction={
                <Typography variant="subtitle1">60</Typography>
              }>
                <ListItemButton>
                  <ListItemText primary="Short" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding secondaryAction={
                <Typography variant="subtitle1">10</Typography>
              }>
                <ListItemButton>
                  <ListItemText primary="Mid-length" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding secondaryAction={
                <Typography variant="subtitle1">56</Typography>
              }>
                <ListItemButton>
                  <ListItemText primary="Sweather" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding secondaryAction={
                <Typography variant="subtitle1">80</Typography>
              }>
                <ListItemButton>
                  <ListItemText primary="Party Dresses" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding secondaryAction={
                <Typography variant="subtitle1">100</Typography>
              }>
                <ListItemButton>
                  <ListItemText primary="Regular Fit" />
                </ListItemButton>
              </ListItem>
            </List>
          </Grid>
          <Grid item>
            <Typography variant="h5">style</Typography>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
              {['Casual', 'Business casual', 'Bohemian', 'Minimalist', 'Uniqlo', 'Zara', 'Gucci', 'Mango', 'Ralph Lauren'].map((value, index) => {
                const labelId = `${value}`;
                return (
                  <ListItem
                    key={value}
                    disablePadding
                  >
                    <ListItemButton role={undefined} onClick={handleToggle(index)} dense>
                      <ListItemIcon>
                        <Checkbox
                          edge="start"
                          checked={checked.indexOf(index) !== -1}
                          tabIndex={-1}
                          disableRipple
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </ListItemIcon>
                      <ListItemText id={labelId} primary={labelId} />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Grid>
          <Grid item>
            <Typography variant="h5">Color</Typography>
            <Grid container spacing={3} sx={{mt:2}}>
              {['#FF2E00', '#F7DDD0', '#66A5FF', '#FF9D41', '#FFD36C', '#4BCB88', '#9747FF', '#FF67DE', '#967C62', '#434343', '#BCBFC2', '#FFF'].map((color) => {
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
          <Grid item>
            <Typography variant="h5">Size</Typography>
            <Grid container spacing={4} sx={{mt:2}}>
              {['2XS', 'XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'].map((size) => {
                return (
                  <Grid item key={size}><div style={{width:'60px', height:'40px',cursor:'pointer', borderRadius: '8px', border: '1px solid #D9D9D9', color:'#555555', fontWeight:'bold', display:'flex', justifyContent:'center', alignItems:'center'}}>{size}</div></Grid>
                  )
              })}
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="h5">Price</Typography>
            <Grid container spacing={3} sx={{mt:2}}>
              <Grid item>
                <Grid container spacing={3} alignItems='center'>
                  <Grid item>
                  <div style={{width:'100px', height:'50px', fontSize:'20px',cursor:'pointer', borderRadius: '8px', border: '1px solid #D9D9D9', color:'#555555', display:'flex', justifyContent:'center', alignItems:'center'}}>$ {value[0]}</div>
                  </Grid>
                  <Grid item>
                    <div style={{width:'60px', height:'5px', backgroundColor:'#D9D9D9', borderRadius:'10px'}}></div>
                  </Grid>
                  <Grid item>
                  <div style={{width:'100px', height:'50px', fontSize:'20px',cursor:'pointer', borderRadius: '8px', border: '1px solid #D9D9D9', color:'#555555', display:'flex', justifyContent:'center', alignItems:'center'}}>$ {value[1]}</div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Box sx={{ width: 300 }}>
                  <Slider
                    getAriaLabel={() => 'Price range'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                  />
                </Box>
              </Grid>
              <Grid item>
                <Grid container justifyContent='space-between' alignItems='center' sx={{width:'300px'}}>
                  <Grid item>
                    <Typography variant="subtitle1">Minimum $200</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">Maximum $500</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="h6">878 products found</Typography>
          </Grid>
      </Grid>
    )
  }

  if(pageWidth>600)
    return (
      filterTypes()
    )
    else return (
      <>
        <Drawer
          anchor='left'
          open={anchor}
          onClose={() => setAnchor(false)}
        >
          {filterTypes()}
        </Drawer>
      </>
    )
}

export default SideFilter
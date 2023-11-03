'use client'
import { Typography, Grid, TextField, InputAdornment, ListItem, ListItemButton, ListItemText, List, Checkbox, ListItemIcon } from '@mui/material'
import React from 'react'
import { BiCategoryAlt } from 'react-icons/bi'
import SearchIcon from '@mui/icons-material/Search';

const SideFilter = () => {

  const [checked, setChecked] = React.useState([0]);

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

  return (
    <Grid container spacing={4} direction='column' sx={{p:10}}>
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
            
        </Grid>
        <Grid item>

        </Grid>
        <Grid item>

        </Grid>
        <Grid item>

        </Grid>
    </Grid>
  )
}

export default SideFilter
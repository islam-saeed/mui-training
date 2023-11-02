import { Typography, Grid, TextField, InputAdornment, ListItem, ListItemButton, ListItemText, List } from '@mui/material'
import React from 'react'
import { BiCategoryAlt } from 'react-icons/bi'
import SearchIcon from '@mui/icons-material/Search';

const SideFilter = () => {
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
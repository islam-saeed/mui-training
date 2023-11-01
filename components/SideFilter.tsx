import { Typography, Grid, TextField, InputAdornment } from '@mui/material'
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
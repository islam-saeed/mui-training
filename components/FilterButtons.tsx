'use client'
import React from 'react'
import Grid from '@mui/material/Grid'
import { BiFilterAlt } from 'react-icons/bi'
import Button from '@mui/material/Button'
import { TextField } from '@mui/material'
import { MenuItem } from '@mui/base'


type keyValuePair = {
    value: string,
    label: string
}

const filter:Array<keyValuePair> = [
    {
      value: "Sort by order",
      label: "Sort by order"
    },
    {
      value: 'All Categories',
      label: 'All Categories'
    }
  ];


const FilterButtons = () => {
  return (
    <Grid container spacing={0}>
      <Grid item>
        <Button variant="text">
          <BiFilterAlt /> 
          Filter
        </Button>
      </Grid>
      <Grid item>
        <TextField
            id="fliter-selection"
            select
            defaultValue="Sort by order"
            variant="standard"
            sx={{
            border: 'none'
            }}
            InputProps={{
                disableUnderline: true,
            }}
        >
            {filter.map((option:keyValuePair) => (
                <MenuItem key={option.value} value={option.value}>
                {option.label}
                </MenuItem>
            ))}
        </TextField>
      </Grid>
    </Grid>
  )
}

export default FilterButtons
'use client'
import React, { useContext } from 'react'
import Grid from '@mui/material/Grid'
import { BiFilterAlt } from 'react-icons/bi'
import Button from '@mui/material/Button'
import { Divider, MenuItem, TextField } from '@mui/material'
import { widthContext } from '@/context/WidthContext'
import { filterToggleContext } from '@/context/FilterToggleContext'


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
  const pageWidth: number = useContext(widthContext)
  const [filterToggle, setFilterToggle] = useContext(filterToggleContext)
  if(pageWidth<=600)
  return (
    <Grid container justifyContent='center' alignItems='center' sx={{border:'1px solid #aaa', p:1}}>
      <Grid item>
        <TextField
            id="filter-selection"
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
      <Divider orientation="vertical" variant="middle" flexItem sx={{backgroundColor:'#aaa'}} />
      <Grid item>
        <Button variant="text" onClick={() => setFilterToggle(true)} >
          <BiFilterAlt /> 
          Filter
        </Button>
      </Grid>
    </Grid>
  )
  else return(
    <></>
  )
}

export default FilterButtons
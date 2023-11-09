'use client'
import React, { useContext } from 'react'
import Grid from '@mui/material/Grid'
import { usePathname } from 'next/navigation'
import { TextField, Typography, MenuItem } from '@mui/material'
import { widthContext } from '@/context/WidthContext'


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

const CategoryHeader = () => {
  const pageWidth: number = useContext(widthContext)
  const pathname = usePathname()
  let category = [...pathname.slice(1).split('/')][0]
  if(pageWidth>600)
  return (
    <Grid container justifyContent='space-between' alignItems='center' sx={{height:'80px', backgroundColor:'#E9E9E9', px:8, mb:5}}>
        <Grid item>
            <Grid container justifyContent='space-between' alignItems='center' sx={{width: '180px'}}>
              <Grid item>
                <Typography variant="h5" sx={{height:'50px', textAlign:'center', display:'table-cell', verticalAlign:'middle'}}>{category}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" sx={{height:'50px', textAlign:'center', display:'table-cell', verticalAlign:'middle'}}>110 items</Typography>
              </Grid>
            </Grid>
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
  else return(
    <></>
  )
}

export default CategoryHeader
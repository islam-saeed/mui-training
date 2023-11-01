'use client'
import { Box } from '@mui/system'
import React from 'react'



const CardGrid = ({children}: {children: string | JSX.Element | JSX.Element[] | (() => JSX.Element)}) => {
  return (
    <Box sx={{display: 'flex', gap: '50px', flexWrap: 'wrap'}}>
        {children}
    </Box>
  )
}

export default CardGrid
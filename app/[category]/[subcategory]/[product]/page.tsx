import BreadCrumb from '@/components/BreadCrumb'
import ImageGallery from '@/components/ImageGallery'
import React from 'react'
import Grid from '@mui/material/Grid'
import ProductOptions from '@/components/ProductOptions'

const page = () => {
  return (
    <>
        <BreadCrumb />
        <Grid container spacing={3}>
          <Grid item>
            <ImageGallery />
          </Grid>
          <Grid item>
            <ProductOptions />
          </Grid>
        </Grid>
    </>
  )
}

export default page
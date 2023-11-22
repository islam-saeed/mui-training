import BreadCrumb from '@/components/BreadCrumb'
import ImageGallery from '@/components/ImageGallery'
import React from 'react'
import Grid from '@mui/material/Grid'
import ProductOptions from '@/components/ProductOptions'
import ProductDetails from '@/components/ProductDetails'
import Slider from "@/components/Slider"
import ProductDetailsCard from '@/components/ProductDetailsCard'



const page = () => {
  return (
    <>
        <Grid container spacing={3} sx={{px:5}}>
          <Grid item>
            <BreadCrumb />
          </Grid>
          <Grid item>
            <Grid container spacing={3}>
              <Grid item>
                <ImageGallery />
              </Grid>
              <Grid item>
                <ProductOptions />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <ProductDetails />
          </Grid>
          <Grid item>
            <h3>You might also like</h3>
          </Grid>
        </Grid>
        <Slider SlideNumber={4}>
          <ProductDetailsCard />
          <ProductDetailsCard />
          <ProductDetailsCard />
          <ProductDetailsCard />
          <ProductDetailsCard />
          <ProductDetailsCard />
          <ProductDetailsCard />
        </Slider>
    </>
  )
}

export default page
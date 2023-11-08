import CardGrid from '@/components/CardGrid'
import TopCard from '@/components/TopCard'
import BreadCrumb from '@/components/BreadCrumb'
import CategoryHeader from '@/components/CategoryHeader'
import React from 'react'
import SideFilter from '@/components/SideFilter'
import Grid from '@mui/material/Grid'
import FilterButtons from '@/components/FilterButtons'

const page = () => {
  return (
    <>
      <BreadCrumb />
      <CategoryHeader />
      <FilterButtons />
      <Grid container justifyContent='space-between' sx={{p:5}}>
        <Grid item sm={5} md={4}>
          <SideFilter />
        </Grid>
        <Grid item xs={12} sm={5} md={7} lg={8}>
          <CardGrid>
              <TopCard />
              <TopCard />
              <TopCard />
              <TopCard />
              <TopCard />
              <TopCard />
              <TopCard />
              <TopCard />
              <TopCard />
              <TopCard />
              <TopCard />
              <TopCard />
          </CardGrid>
        </Grid>
      </Grid>
    </>
  )
}

export default page
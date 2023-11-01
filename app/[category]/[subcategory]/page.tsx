import CardGrid from '@/components/CardGrid'
import TopCard from '@/components/TopCard'
import BreadCrumb from '@/components/BreadCrumb'
import CategoryHeader from '@/components/CategoryHeader'
import React from 'react'
import SideFilter from '@/components/SideFilter'
import Grid from '@mui/material/Grid'

const page = () => {
  return (
    <>
      <BreadCrumb />
      <CategoryHeader />
      <Grid container justifyContent='space-between'>
        <Grid item sm={4}>
          <SideFilter />
        </Grid>
        <Grid item sm={8}>
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
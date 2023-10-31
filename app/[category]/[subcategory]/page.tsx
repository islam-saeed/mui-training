import CardGrid from '@/components/CardGrid'
import TopCard from '@/components/TopCard'
import BreadCrumb from '@/components/BreadCrumb'
import CategoryHeader from '@/components/CategoryHeader'
import React from 'react'

const page = () => {
  return (
    <>
      <BreadCrumb />
      <CategoryHeader />
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
    </>
  )
}

export default page
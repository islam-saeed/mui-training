import CardGrid from '@/components/CardGrid'
import TopCard from '@/components/TopCard'
import BreadCrumb from '@/components/BreadCrumb'
import React from 'react'

const page = () => {
  return (
    <>
      <BreadCrumb />
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
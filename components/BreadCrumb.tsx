'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import { FaChevronRight } from 'react-icons/fa6'

const BreadCrumb = () => {
    const pathname = usePathname()
    let breadCrumb = ['HomePage', ...pathname.slice(1).split('/')]
  return (
    <div style={{marginLeft: '20px', marginBottom: '25px'}}>
    {breadCrumb.map((stage, index) => {
        if(index===breadCrumb.length-1){
            return <span key={stage}>{stage.charAt(0).toUpperCase()+stage.slice(1)}</span>
        } else {
            return <><span key={stage}>{stage.charAt(0).toUpperCase()+stage.slice(1)} </span><span> <FaChevronRight style={{fontSize: '12px'}} /> </span></>
        }
    })}
    </div>
  )
}

export default BreadCrumb
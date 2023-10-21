'use client'
import React, { useEffect, useState } from 'react'
const { createContext } = require("react");

type Props = {
    children: string | JSX.Element | JSX.Element[] | (() => JSX.Element)
  }

export const widthContext =  createContext(undefined)

export const WidthContext = ({children} : Props) => {
    const [pageWidth, setPageWidth] = useState(0)
    useEffect(() => {
        setPageWidth(window.innerWidth)
    }, [pageWidth])
    if (typeof window !== 'undefined') {
        window.onresize = () => {
            setPageWidth(window.innerWidth)
        }
    }
    return (
        <widthContext.Provider value={pageWidth}>
            {children}
        </widthContext.Provider>
    )
}
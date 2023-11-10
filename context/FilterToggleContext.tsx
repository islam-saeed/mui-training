'use client'
import React, { useState } from 'react'
const { createContext } = require("react");

type Props = {
    children: string | JSX.Element | JSX.Element[] | (() => JSX.Element)
}

export const filterToggleContext =  createContext(undefined)

export const FilterToggleContext = ({children}: Props) => {
  const [filterToggle, setFilterToggle] = useState(false)
  return (
    <filterToggleContext.Provider value={[filterToggle, setFilterToggle]}>
        {children}
    </filterToggleContext.Provider>
  )
}
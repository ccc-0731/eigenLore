'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface NerdModeContextType {
  isNerdMode: boolean
  toggleNerdMode: () => void
}

const NerdModeContext = createContext<NerdModeContextType | undefined>(undefined)

export const useNerdMode = () => {
  const context = useContext(NerdModeContext)
  if (!context) {
    throw new Error('useNerdMode must be used within a NerdModeProvider')
  }
  return context
}

interface NerdModeProviderProps {
  children: ReactNode
}

export const NerdModeProvider: React.FC<NerdModeProviderProps> = ({ children }) => {
  const [isNerdMode, setIsNerdMode] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('nerdMode')
    if (stored) {
      setIsNerdMode(JSON.parse(stored))
    }
  }, [])

  const toggleNerdMode = () => {
    const newMode = !isNerdMode
    setIsNerdMode(newMode)
    localStorage.setItem('nerdMode', JSON.stringify(newMode))
  }

  return (
    <NerdModeContext.Provider value={{ isNerdMode, toggleNerdMode }}>
      {children}
    </NerdModeContext.Provider>
  )
}
import React, { useState, useContext, useEffect } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [mealIsActive, setMealIsActive] = useState('lunch')
  const [isDayActive, setIsDayActive] = useState(false)
  const [value, setValue] = useState(0)
  const [searchTerm, setSearchTerm] = useState('')

  const openCart = () => {
    setIsCartOpen(true)
  }

  const closeCart = () => {
    setIsCartOpen(false)
  }

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const activeMeal = (param) => {
    setMealIsActive(param)
  }

  const activeDay = () => {
    setIsDayActive(true)
  }

  return (
    <AppContext.Provider
      value={{
        openCart,
        closeCart,
        openModal,
        closeModal,
        activeMeal,
        activeDay,
        isCartOpen,
        isModalOpen,
        mealIsActive,
        isDayActive,
        value,
        setValue,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }

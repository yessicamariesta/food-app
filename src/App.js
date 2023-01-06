import React, { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/Global'
import { GlobalContainer } from './styles/GlobalContainer.styled'
import Header from './components/Header'
import Content from './components/Content'
import CartModal from './components/CartModal'
import LocationModal from './components/LocationModal'
import { useGlobalContext } from './context'

const theme = {
  colors: {
    addButton: '#f9423a',
    cartButton: '#a23530',
    mainText: '#424749',
    subText: '#6e7679',
    icon: '#e2e4e4',
    border: '#f1f1f2',
  },
}

function App() {
  const { isCartOpen, isModalOpen } = useGlobalContext()

  // useEffect(() => {
  //   console.log(isCartOpen)
  // }, [isCartOpen])

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <GlobalContainer className={isModalOpen && 'modal-overlay'}>
          <Header />
          <Content />
          {isCartOpen && <CartModal />}
          <LocationModal />
        </GlobalContainer>
      </>
    </ThemeProvider>
  )
}

export default App

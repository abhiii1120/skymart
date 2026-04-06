import React from 'react'
import Navbar from './components/Navbar'
import AppRoutes from './routes/AppRoutes'
import Footer from './components/Footer'
import { CardProvider } from './context/CardContext'

const App = () => {
  return (
    <div className='min-h-screen bg-[#0d0d0d]'>
      <CardProvider>
      <Navbar/>
      <AppRoutes/>
      </CardProvider>
      <Footer/>
    </div>
  )
}

export default App
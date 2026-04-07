// App.jsx
import React from 'react'
import { useLocation } from 'react-router'
import Navbar from './components/Navbar'
import AppRoutes from './routes/AppRoutes'
import Footer from './components/Footer'
import { CardProvider } from './context/CardContext'
import { AuthProvider } from './context/AuthContext'

const App = () => {
  const location = useLocation();
  
  // Routes where Navbar and Footer should be hidden
  const hideNavFooterRoutes = ['/login', '/signup'];
  const shouldHide = hideNavFooterRoutes.includes(location.pathname);

  return (
    <div className='min-h-screen bg-[#0d0d0d '>
      <AuthProvider>  
        <CardProvider>
          {!shouldHide && <Navbar/>}
          <AppRoutes/>
        </CardProvider>
      </AuthProvider>
      {!shouldHide && <Footer/>}
    </div>
  )
}

export default App
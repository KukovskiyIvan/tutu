import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './components/Menu.jsx'
import MainRoutes from './routes/ MainRoutes.jsx'
import MainPage from './pages/MainPage.jsx'


function App() {

  return ( 
    <> 
    <MainPage/>
     <MainRoutes />
    </>
  )
}

export default App

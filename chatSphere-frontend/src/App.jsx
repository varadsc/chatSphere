import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {Route, Routes} from 'react-router-dom'
import viteLogo from '/vite.svg'
import './App.css'
import { PageLayout } from './layouts/PageLayout'
import { Homepage } from './components/homepage/Homepage'

function App() {

  return (
    <>
      <Routes>
        <Route path="/login" element={<>welcome to login page</>}></Route>
        <Route path="/signup" element={<>welcome to signup page</>}></Route>

        <Route path='/' element={<PageLayout />}>
            <Route path='/' element={<Homepage />}></Route>
            <Route path="/about" element={<>welcome to Home page</>}></Route>  
        </Route>

      </Routes>
    </>
  )
}

export default App

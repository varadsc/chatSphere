import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {Route, Routes} from 'react-router-dom'
import viteLogo from '/vite.svg'
import './App.css'
import { PageLayout } from './layouts/PageLayout'

function App() {

  return (
    <>
      <Routes>
        <Route path="/login" element={<>welcome to login page</>}></Route>

        <Route path='/' element={<PageLayout />}>
            <Route path='/' element={<div className='bg-primary'>hi</div>}></Route>
            <Route path="/home" element={<>welcome to Home page</>}></Route>  


        </Route>


      </Routes>
          {/* <div className="d-flex bg-warning" style={{height :'500px', backgroundColor:'red'}} >
            <div className='m-2 p-2 bg-primary' style={{height:'100px'}}>hi</div>
            <div className='m-2 p-2 bg-primary' style={{height:'100px'}}>hi</div>
            <div className='m-2 p-2 bg-primary' style={{height:'100px'}}>hi</div>
            <div className='m-2 p-2 bg-primary' style={{height:'100px'}}>hi</div>
            <div className='m-2 p-2 bg-primary' style={{height:'100px'}}>hi</div>
          </div> */}


      
    </>
  )
}

export default App

import React from 'react'
import Navbar from '../componuts/Navbar/Navbar.js';
import '../styles/globals.css';
import Carousel from '../componuts/carousel/carousel';
export default function App() {
  return (
    <>
      <div className='col-md-12'>
        <Navbar />
        <Carousel />
      </div>
    </>
  )
}

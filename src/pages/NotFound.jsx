import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import './NotFound.css'

function NotFound() {
  return (
    <>
        <Navbar/>
            <div className="container">
                <div className="flex">
                    <h1 className='title-text'>404</h1>
                    <h2 className='subtitle-text'>Oops! <br/>Your car seems to be lost!</h2>
                </div>
            </div>        
        <Footer/>
    </>
  )
}

export default NotFound
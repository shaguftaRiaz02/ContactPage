// import React from 'react'
import './App.css';
import ContactForm from './Components/ContactForm/ContactForm';
import ContactHeader from './Components/ContactHeader/ContactHeader';
import Navbar from "./Components/Navbar/Navbar"

const App = () => {
  return (
    <>
      <Navbar/>
      <ContactHeader/>
      <ContactForm/>
    </>
  )
}

export default App

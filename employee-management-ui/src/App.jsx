import { useState } from 'react'
import "tailwindcss";
import Navbar from './components/Navbar';
import AddEmployee from './components/AddEmployee';
import ShowEmployee from './components/showEmployee';
import { Routes, Route } from 'react-router-dom';
import UpdateEmployee from './components/updateEmployee';

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/add" element={<AddEmployee />} />
        <Route path="/" element={<ShowEmployee />} />
        <Route path="/update/:id" element={<UpdateEmployee />} />
      </Routes>
    </>
  )
}

export default App

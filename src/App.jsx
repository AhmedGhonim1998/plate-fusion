import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LicensePlateDisplay from './Home/LicensePlateDisplay';
import Nav from './assets/Nav&Footer/Nav';
import { Routes , Route } from 'react-router-dom';
import HomeLayout from './Home/HomeLayout';
function App() {
  const [text, setText] = useState('');
  const [style, setStyle] = useState('classic');

  const handlePreview = () => {
    // Logic for previewing can be added here
    console.log('Previewing:', text, style);
  };
  return (
    <>
    <Nav/>
    {/* <h1>Create Your Custom License Plate</h1>
    <LicensePlateDisplay/> */}
    <Routes>
      <Route path='/'element={<HomeLayout/>}/>
    </Routes>
    </>
  )
}

export default App

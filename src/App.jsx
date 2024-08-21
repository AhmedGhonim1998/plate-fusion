import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LicensePlateDisplay from './Home/LicensePlateDisplay';

function App() {
  const [text, setText] = useState('');
  const [style, setStyle] = useState('classic');

  const handlePreview = () => {
    // Logic for previewing can be added here
    console.log('Previewing:', text, style);
  };
  return (
    <>
    <h1>Create Your Custom License Plate</h1>
    <LicensePlateDisplay/>
    </>
  )
}

export default App

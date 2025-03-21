import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import Header from './components/Header'
import InputField from './components/InputField'
import RadioButtonExample from './components/MovieRadio';
import TextArea from './components/TextArea'


function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  
  return(
    <>
    <Header />
    <InputField
        label="ชื่อ" 
        type="text" 
        placeholder="กรุณากรอกชื่อของคุณ" 
        value={name} 
        onChange={(e) => setName(e.target.value)}      
    />
     <InputField
        label="อีเมล" 
        type="email" 
        placeholder="example@email.com" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)}      
    />
    <RadioButtonExample />
    <TextArea />
    </>
  )
}

export default App

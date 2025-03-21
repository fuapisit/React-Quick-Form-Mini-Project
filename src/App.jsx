import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import Header from './components/Header'
import InputField from './components/InputField'
import RadioButtonExample from './components/MovieRadio';
import TextArea from './components/TextArea'
import Button from './components/Button'

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
 
// ฟังก์ชันรีเซ็ต
const handleReset = () => {
  setName("");
  setEmail("");
};

// ฟังก์ชันส่งแบบฟอร์ม
const handleSubmit = (event) => {
  event.preventDefault();
  console.log("Form submitted:", { name, email });
};
  
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
    
    <div className="flex justify-between border-t p-6 pt-4">
        <Button 
          label="🗘รีเซ็ต" 
          type="reset" 
          onClick={handleReset} 
          className="bg-white text-black border-1 border-lightgrey hover:bg-gray-100 p-4 rounded" 
        />
        <Button 
          label="ส่งแบบสำรวจ" 
          type="submit" 
          className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-4 rounded-t-lg"
        />
      </div>
    </>
  )
}

export default App

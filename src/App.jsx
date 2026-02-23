import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("yellow");

  function changecolor(color){
     setColor(color)

  }

  return (
    <>
     <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
      <div className='flex fixed flex-wrap justify-center bottom-12 inset-x-0 px-2 py-1'>
      <div className='flex flex-wrap justify-center px-2 py-1  shadow-lg gap-3
      bg-white rounded-3xl'>
        
          <button onClick={()=>changecolor('red')} className='border-2 outline-none px-4 py-1 rounded-full shadow-lg text-black'>Test</button>
          <button onClick={()=>changecolor('blue')} className='border-2 outline-none px-4 py-1 rounded-full shadow-lg text-black'>Test</button>
          <button onClick={()=>changecolor('yellow')} className='border-2 outline-none px-4 py-1 rounded-full shadow-lg text-black'>Test</button>

      </div>
     </div>
     </div>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Usefetch from "./component/Usefetch"

function App () {
  
const{data,loading,error}=Usefetch("https://api.escuelajs.co/api/v1/products")
if(loading)
{
  return <h2 className='bg-black h-screen w-full text-2xl text-center text-white pt-10 justify-center pt-80'>Loading...</h2>
}

if(error)
{
  return <h2 className='bg-black h-screen text-white text-2xl text-center pt-80 '>{error}</h2>
}

const photos=[
  {
    color:"#9BE15D"
  },

  {
    color:"#8E2DE2"
  }, 
  
  {color:"#bd2378"
  }, 
  
  {  color:"#0f7202"
   
  },

   {
    color:"#FF0"
  }, 

{
  color:"#d27c04c0"
},


  {  color:"#05294e"
   
  },

  {
  color:"#b10707"
  },
  
];

  return (
    <>
     <div className='bg-black'>
       <h1 className='text-white text-4xl font-bold text-center mb-10 p-5'>Photos</h1>

      <div className='grid grid-cols-4 '>


        {data.slice(0,32).map((item,box)=>(
          
          <div   className=' bg-black-400 'key={box} >

         
             {photos.map((m,index)=>( 
  
            <div className=' h-40 w-65 bg-gray-500 border-1  m-8' key={index}>
              <div  
              className='text-white border-1 h-30 w-50 text-center p-12 m-6'
              style={{background:m.color}}>600X600
              </div>
            <p className='text-white  flex pl-16'>photos in box</p>
              </div>

                ))}

            </div> 
         ) )} 
      </div>
      </div>
  
   
    </> 
  )
}

export default App

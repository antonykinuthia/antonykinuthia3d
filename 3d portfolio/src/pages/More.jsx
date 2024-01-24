import React from 'react'
import { Html } from '@react-three/drei'
import Skills from '../components/Skills'
import './style.css'


const More = () => {
  return (
    <Html>
    <div className='intro1'>
     <h1 className="header">Hello, I'm  <a className='headertext'> Antony Njenga</a></h1> 
     <p className='introduction'> A frontend engineer based in Kenya, specializing in creation of 3D virtual worlds where imagination meets innovation.<br/>
        As a 3D developer am a digital sculptor shaping immersive experiences that transcend the boundaries of reality. Let's unravel the enchanting tapestry of the 3D world.
       </p>
       <h1 className='header'> My skills</h1>
       <Skills />
       </div>
    </Html>
  )
}

export default More
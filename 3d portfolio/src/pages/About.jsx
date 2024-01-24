import './style.css'
// import Skills from '../components/Skills'
import { Link } from 'react-router-dom'
import Bird from '../models/Bird'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Loader from '../components/Loader'
import More from './More';


const About = () => {
  return (
   <section className='about'>
  {/*    <div className='intro1'>
     <h1 className="header">Hello, I'm  <a className='headertext'> Antony Njenga</a></h1> 
     <p className='introduction'> A frontend engineer based in Kenya, specializing in creation of 3D virtual worlds where imagination meets innovation.<br/>
        As a 3D developer am a digital sculptor shaping immersive experiences that transcend the boundaries of reality. Let's unravel the enchanting tapestry of the 3D world.
       </p>
       <h1 className='header'> My skills</h1>
       <Skills /> */}

        <Canvas className='bird_canvas'>
        <Suspense  fallback={<Loader/>}>
        <directionalLight position={[1,1,1]} intensity={2}/>
        <ambientLight intensity={0.5}/>
        <hemisphereLight  groundColor="#000" intensity={1}/>
         {/* <Sky/> */}
         <More/>
           <Bird/>
        </Suspense>
        </Canvas>
        <hr></hr>
        <div className='div'>
        <h2 className='tag'> Impressed by my work ? <br className='br'/> lets work together </h2>
        <Link to='/contacts' className='button2'>contact me</Link>
       </div>
   
   </section>
  )
}

export default About

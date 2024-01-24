import { Canvas } from "@react-three/fiber";
import { Suspense,useState,useEffect, useRef } from "react";
import Loader from "../components/Loader";
import Island from "../models/Island";
import Sky from "../models/Sky";
import Plane from "../models/Plane";
import PopUp from "../components/PopUp";
import sakura from '../assets/sakura.mp3';
import { soundoff, soundon } from "../assets/icons";

const Home = () => {

  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [playMusic, setPlayMusic] = useState(false);

  const audioRef = useRef(new Audio(sakura));
  audioRef.current.loop = true;
  audioRef.current.volume = 0.4;

  useEffect(() =>{
     if(playMusic){
       audioRef.current.play();
     }

     return () => {
      audioRef.current.pause();
     }
  },[playMusic])
 
  const adjustIslandScreenSize = () => {
    let screenScale = null;
    let screenPosition =  [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

   if(window.innerWidth < 768){
     screenScale = [0.9, 0.9, 0.9];
   } else{
     screenScale = [1, 1, 1]
   }

   return[screenScale, screenPosition, rotation]
 }

 const adjustPlaneScreenSize = () => {
   let screenScale,  screenPosition 

 if(window.innerWidth < 768){
   screenScale = [1.5, 1.5, 1.5];
   screenPosition= [0, -1.5, 0];
 } else{
   screenScale = [3, 3, 3];
   screenPosition = [0, -4, -4];
 }

 return[screenScale, screenPosition]
}


 const [islandScale, islandPosition, rotation] = adjustIslandScreenSize();
 const [ planeScale, planePosition] = adjustPlaneScreenSize();

  return (
    <section className="home">
    <div className="popUp">
      {currentStage  && <PopUp currentStage={currentStage}/>}
    </div>  
      <Canvas
      className={isRotating ? "canvas" : "notCanvas"}
      camera={{near: 0.1, far: 1000, }}
      >
       <Suspense fallback={<Loader/>}>
        <directionalLight position={[1,1,1]} intensity={2}/>
        <ambientLight intensity={0.5}/>
        <hemisphereLight  groundColor="#000" intensity={1}/>

        <Sky
          isRotating={isRotating}
        />
        <Island
          position={islandPosition}
          scale={islandScale}
          rotation={rotation}
          isRotating={isRotating}
          setIsRotating={setIsRotating}
          setCurrentStage={setCurrentStage}
        />
        <Plane
          isRotating={isRotating}
          position={planePosition}
          scale= {planeScale}
          rotation={[0, 20, 0]}
        />
       </Suspense>
      </Canvas>

      <div  className="music">
        <img
        src={playMusic ? soundoff : soundon}
        className="play"
        onClick={() => setPlayMusic(!playMusic)}
         />
      </div>
    </section>
  )
}

export default Home;

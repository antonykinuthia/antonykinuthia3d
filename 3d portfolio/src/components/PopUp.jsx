import React from 'react'
import { Link } from 'react-router-dom'
import {arrow} from '../assets/icons'




const RenderContent = {
    1: (
        <h1 className='intro'>Hi, I am <span className='span'> Antony</span>👋🏾 <br/>
        A frontend engineer from Kenya
        </h1>
        ),
    2:(
       <div className='infoBox'>
        <p>3D creation of virtual worlds where imagination meets innovation </p>
        <Link to="/about"  className='button1'>
        learn more
        <img src={arrow} className='image' />
        </Link>
       </div>
    ),
    3:(
        <div className='infoBox'>
        <p>interested by what you see contact me  </p>
        <Link to="/contacts"  className='button3'>
        contact me
        <img src={arrow} className='image' />
        </Link>
       </div>

    )
}


const PopUp = ({ currentStage}) => {
  return  RenderContent[currentStage] || null;
}

export default PopUp;

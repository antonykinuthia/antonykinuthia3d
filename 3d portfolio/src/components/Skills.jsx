import React from 'react'
import skills from '../constants/index'
import './index.css'

const Skills = () => {
  return (
    <div className='container'>
        <div className='card-container'>
        {skills.map((skill) =>(
          <div>
            <div className='card'>
              <img
                src={skill.imageUrl}
                alt={skill.name}
              />
            </div>
          </div>
        ))}
        </div>
    </div>
  )
}

export default Skills
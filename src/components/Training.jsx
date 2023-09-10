import React from 'react'
import './TrainingStyles.css'

import { Link } from 'react-router-dom'

import Pod from '../assets/pod.jpg'
import Moon from '../assets/moon.jpg'

const Training = () => {
  return (
    <div className='training'>
        <div className='left'>
            <h1>Trainig</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Adipisci molestiae rerum voluptas dignissimos saepe repellat, 
                nobis officiis. Sed velit ut facilis a ad molestias aut.
            </p>
            <Link to='/contact' ><button className='btn'>Contact</button></Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img src={Moon} className='img' alt='/' />
                </div>
                <div className='img-stack bottom'>
                    <img src={Pod} className='img' alt='/' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Training
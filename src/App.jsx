import './App.css';
import { motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import images from './images'

function App() {
  console.log(images)
  return (
    <div className="Container">
      <motion.div className='block'>
        {images.map((img, i) => {
          return(<motion.img className='image' key={i + img} src={img} animate={{x:75}} alt="nature" />)
        })}
      </motion.div>
    </div>
  );
}

export default App;

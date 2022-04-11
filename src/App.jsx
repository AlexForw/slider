import './App.css';
import { motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import images from './images'

function App() {
  const [width, setWidth] = useState(0)
  const block = useRef()
  useEffect (() => {
    setWidth(block.current.scrollWidth - block.current.offsetWidth)
  },[])
  return (
    <div className='App'>
      <motion.div className="wrapper"><motion.div ref={block} className="container">
        <motion.div drag='x' dragConstraints={{right:0,left: -width}} className='block'>
          {images.map((img, i) => {
            return (
            <motion.div className="item"><img className='image' key={i + img} src={img} animate={{ x: 20 }} alt="nature" /></motion.div>
            )
          })}
        </motion.div>
      </motion.div>
      </motion.div>
    </div>
      );
}

      export default App;

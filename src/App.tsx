import { motion } from 'framer-motion'
import './App.css'



function App() {

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 5 }}
        transition={{ duration: 10 }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
      >
        Hi
      </motion.div>
    </>
  )
}

export default App

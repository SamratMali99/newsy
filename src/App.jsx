import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Newsboard from './components/Newsboard.jsx'
import './App.css'

const App = () => {

  const [category, setCategory] = useState("general");

  return (
    <div>
      <Navbar setCategory = {setCategory}/>
      <Newsboard category={category}/>
    </div>
  )
}

export default App

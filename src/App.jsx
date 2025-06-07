import './App.css'
import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Project from './pages/Project'
import Experience from './pages/Experience'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      {/* <Route path="/about" element={<About />}></Route>
      <Route path="/project" element={<Project />}></Route>
      <Route path="/experience" element={<Experience />}></Route> */}
    </Routes>
  )
}

export default App

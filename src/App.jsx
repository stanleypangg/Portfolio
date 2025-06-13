import './App.css'
import { Routes, Route, Navigate } from 'react-router'
import Home from './pages/Home'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="*" element={<Navigate to="/" replace />} />
      {/* <Route path="/about" element={<About />}></Route>
      <Route path="/project" element={<Project />}></Route>
      <Route path="/experience" element={<Experience />}></Route> */}
    </Routes>
  )
}

export default App

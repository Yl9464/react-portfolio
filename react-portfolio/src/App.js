import { Routes, Route } from 'react-router-dom'
import './App.scss'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  )
}

export default App

import { Routes, Route } from 'react-router-dom'
import './App.css'
import Homepage from './components/HomePage/Hompage'
import NavBar from './components/NavBar'

const App: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  )
}
export default App

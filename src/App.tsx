import { Routes, Route } from 'react-router-dom'
import './App.css'
import Homepage from './components/HomePage/Hompage'
import NavBar from './components/NavBar'
import SingleBookPage from './components/SingleBookPage/SingleBookPage'

const App: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/book/:id" element={<SingleBookPage />} />
      </Routes>
    </div>
  )
}
export default App

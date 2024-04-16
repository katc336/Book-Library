import { Routes, Route } from 'react-router-dom'
import './App.css'
import Homepage from './components/HomePage/Hompage'
import NavBar from './components/Navigation/NavBar'
import SingleBookPage from './components/SingleBookPage/SingleBookPage'
import SearchResults from './components/SearchedBookPage.tsx/SearchResult'

const App: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/book/:id" element={<SingleBookPage />} />
        <Route path="/search_book/:searchBook" element={<SearchResults />} />
      </Routes>
    </div>
  )
}
export default App

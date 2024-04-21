import { Routes, Route } from 'react-router-dom'
import './App.css'
import Homepage from './components/HomePage/Hompage'
import WebNavBar from './components/Navigation/WebNavBar'
import SingleBookPage from './components/SingleBookPage/SingleBookPage'
import SearchResults from './components/SearchedBookPage.tsx/SearchResult'
import SearchByDateResult from './components/SearchedBookPage.tsx/SearchByDateResult'

const App: React.FC = () => {
  return (
    <div>
      <WebNavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/book/:id" element={<SingleBookPage />} />
        <Route path="/search_book/:searchBook" element={<SearchResults />} />
        <Route path="/search_book/:start/:end" element={<SearchByDateResult/>} />
      </Routes>
    </div>
  )
}
export default App

import { Routes, Route } from 'react-router-dom'
import './App.css'
import Homepage from './components/HomePage/Hompage'
import WebNavBar from './components/Navigation/WebNavBar'
import SingleBookPage from './components/SingleBookPage/SingleBookPage'
import SearchResults from './components/SearchedBookPage.tsx/SearchResult'
import SearchByDateResult from './components/SearchedBookPage.tsx/SearchByDateResult'
import SearchByTopicResult from './components/SearchedBookPage.tsx/SearchByTopicResult'
import PopularBookDisplay from './components/HomePage/components/PopularBookDisplay'

const App: React.FC = () => {
  return (
    <div>
      <WebNavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/search_book/most_popular" element={<PopularBookDisplay />} />
        <Route path="/book/:id" element={<SingleBookPage />} />
        <Route path="/search_book/:searchBook" element={<SearchResults />} />
        <Route path="/search_book/:start/:end" element={<SearchByDateResult />} />
        <Route path="/search_book/topic/:topic" element={<SearchByTopicResult />} />
      </Routes>
    </div>
  )
}
export default App

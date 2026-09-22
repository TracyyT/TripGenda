import { Route, Routes } from 'react-router-dom'
import DestinationResultsPage from './pages/DestinationResultsPage'
import './App.css'

import HomePage from './pages/HomePage'
import TripSetupPage from './pages/TripSetupPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/plan" element={<TripSetupPage />} />
      <Route path="/destinations" element={<DestinationResultsPage />} />
    </Routes>
    
  )
}

export default App
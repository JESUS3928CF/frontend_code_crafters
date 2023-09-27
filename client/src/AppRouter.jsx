import HomePage from "./HomePage"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/homepage" element={<HomePage />} />
      </Routes>
    </Router>
  )
}

export default AppRouter
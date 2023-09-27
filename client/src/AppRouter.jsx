import HomePage from "./HomePage"
import SpecificSupport from "./pagesSupport/SpecificSupport";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/specific-support" element={<SpecificSupport />} />
      </Routes>
    </Router>
  )
}

export default AppRouter
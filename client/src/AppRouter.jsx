
import HomePage from "./HomePage"
import SpecificSupport from "./pagesSupport/SpecificSupport";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormSupport from "./components/FormSupport";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/form-support" element={<FormSupport />} />
      </Routes>
    </Router>
  )
}

export default AppRouter


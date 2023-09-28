
import HomePage from "./HomePage"
import SpecificSupport from "./pagesSupport/SpecificSupport";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormSupport from "./components/FormSupport";
import GeneralSupport from "./pagesSupport/GeneralSupport";
import {Toaster} from 'react-hot-toast'

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/form-support" element={<FormSupport />} />
        <Route path="/specificic-support" element={<SpecificSupport />} />
        <Route path="/general-support" element={<GeneralSupport />} />
      </Routes>
      <Toaster/>
    </Router>
  )
}

export default AppRouter


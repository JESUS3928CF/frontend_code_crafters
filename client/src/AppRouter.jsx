import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import FormSupport from './components/FormSupport';

const AppRouter = () => {
  return (
    <div>
      <Router>
        <Routes>
            <Route path='/form-support' element={<FormSupport/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default AppRouter

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import OrganizationalUnits from './pages/OrganizationalUnits';
import OrganizationChar from './pages/OrganizationChar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/OrganizationalUnits' element={<OrganizationalUnits />}  />
        <Route path='/organizationchar' element={<OrganizationChar />} />
      </Routes>
    </Router>
  );
}

export default App;

/*


    */
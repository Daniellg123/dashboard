import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import OrganizationalUnits from './pages/OrganizationalUnits';
import OrganizationChar from './pages/OrganizationChar';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/orgunits' element={<OrganizationalUnits />} />
      <Route path='/orgchar' element={<OrganizationChar />} />
    </Routes>
  );
}

export default App;

/*


    */
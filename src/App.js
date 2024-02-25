import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/global/global.scss';

import Home from './pages/Home'; // Assurez-vous que vous importez correctement le composant Home
import Soins from './pages/Soins';
import Presentation from './pages/Presentation';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Soins' element={<Soins />} />
          <Route path='/Presentation' element={<Presentation />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

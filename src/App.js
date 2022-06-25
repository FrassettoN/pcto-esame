import { Route, Routes } from 'react-router-dom';
import Header from './layout/Header';

// Pages
import Fisica from './pages/Fisica';
import JobLab from './pages/JobLab';
import Stampa3D from './pages/Stampa3D';
import Chimica from './pages/Chimica';
import Coding from './pages/Coding';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='fisica' element={<Fisica />} />
        <Route path='joblab' element={<JobLab />} />
        <Route path='stampa3D' element={<Stampa3D />} />
        <Route path='chimica' element={<Chimica />} />
        <Route path='coding/*' element={<Coding />} />
      </Routes>
    </>
  );
}

export default App;

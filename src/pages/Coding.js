import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Competenze from '../layout/coding/Competenze';
import Descrizione from '../layout/coding/Descrizione';
import Università from '../layout/coding/Università';
import imgCoding from '../images/coding/coding.png';

const Coding = () => {
  return (
    <main className=' coding'>
      <h1>Coding e Pensiero Computazionale</h1>
      <div className='table'>
        <aside>
          <nav>
            <NavLink to='descrizione'>Descrizione</NavLink>
            <NavLink to='competenze'>Competenze Acquisite</NavLink>
            <NavLink to='universita'>Per l'Università</NavLink>
            <img src={imgCoding} alt='' />
          </nav>
        </aside>
        <section>
          <Routes>
            <Route path='descrizione' element={<Descrizione />} exact></Route>
            <Route path='competenze' element={<Competenze />} exact></Route>
            <Route path='universita' element={<Università />} exact></Route>
          </Routes>
        </section>
      </div>
    </main>
  );
};

export default Coding;

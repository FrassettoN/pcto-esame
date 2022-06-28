import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Competenze from '../layout/coding/Competenze';
import Descrizione from '../layout/coding/Descrizione';
import Università from '../layout/coding/Università';
import imgCoding from '../images/coding/coding.png';
import Conoscenze from '../layout/coding/Conoscenze';

const Coding = () => {
  return (
    <main className='coding'>
      <h1>Coding e Pensiero Computazionale</h1>
      <div className='table'>
        <aside>
          <nav>
            <NavLink to='descrizione'>Descrizione</NavLink>
            <NavLink to='competenze'>Competenze Acquisite</NavLink>
            <NavLink to='conoscenze'>Nuove Conoscenze</NavLink>
            <NavLink to='universita'>Per l'Università</NavLink>
            <img src={imgCoding} alt='' />
          </nav>
        </aside>
        <section>
          <Routes>
            <Route path='descrizione' element={<Descrizione />} exact />
            <Route path='competenze' element={<Competenze />} exact />
            <Route path='universita' element={<Università />} exact />
            <Route path='conoscenze' element={<Conoscenze />} exact />
          </Routes>
        </section>
      </div>
    </main>
  );
};

export default Coding;

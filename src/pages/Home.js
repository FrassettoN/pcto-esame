import React from 'react';
import { Link } from 'react-router-dom';

// immagini
import imgFisica from '../images/fisica/fisica.jpg';
import logoBeGood from '../images/joblab/logo_begood.png';
import imgStampante3D from '../images/stampa3D/stampante.png';
import imgChimica from '../images/chimica/chimica.png';
import imgCoding from '../images/coding/code.png';
import imgQRCode from '../images/qr_code_PCTO.jpeg';

const Home = () => {
  return (
    <main className='home'>
      <section className='title'>
        <h1>
          Presentazione <span>PCTO</span> di <span>Niccolò Frassetto</span>
        </h1>
        <img src={imgQRCode} alt='' />
      </section>
      <small>
        <em>Liceo Classico B. Zucchi - 29/06/2022</em>
      </small>
      <section>
        <nav>
          <Link to='fisica' className='fisica'>
            <img src={imgFisica} alt='' />
            <section>
              <h3>Laboratorio di Fisica</h3>
            </section>
          </Link>
          <Link to='joblab' className='joblab'>
            <img src={logoBeGood} alt='' />
            <section>
              <h3>JOBLAB @Bocconi</h3>
            </section>
          </Link>
          <Link to='stampa3D' className='stampa3D'>
            <img src={imgStampante3D} alt='' />
            <section>
              <h3>Progettazione per Stampa 3D</h3>
            </section>
          </Link>
          <Link to='chimica' className='chimica'>
            <img src={imgChimica} alt='' />
            <section>
              <h3>Potenziamento di Chimica</h3>
            </section>
          </Link>
          <Link to='coding/descrizione' className='coding'>
            <img src={imgCoding} alt='' />
            <section>
              <h3>Coding e Pensiero Computazionale</h3>
            </section>
          </Link>
        </nav>
      </section>
    </main>
  );
};

export default Home;

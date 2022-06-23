import React from 'react';
import imgFisica from '../images/fisica/fisica.jpg';

const Fisica = () => {
  return (
    <main className='pagina fisica'>
      <h1>Laboratorio di Fisica</h1>
      <p>
        Grazie all'attività di PCTO presso il laboratorio di fisica della scuola
        ho avuto modo di <span>applicare concetti</span> studiati durante le ore
        di lezione <span>a situazioni reali</span>, anticipando talvolta anche
        argomenti non ancora trattati. L'attività mi ha permesso anche di
        avvicinarmi agli <span>strumenti di laboratorio</span> e di{' '}
        <span>condividere idee</span> con gli altri membri del gruppo davanti ai
        problemi presentati. Sfortunatamente il PCTO, svolto durante la prima
        liceo, si è dovuto interrompere dopo cinque lezioni a causa
        dell'emergenza Covid.
      </p>
      <section>
        <img src={imgFisica} alt='' />
        <div>
          <h3>Cosa mi ha lasciato:</h3>
          <ul>
            <li>
              Rinnovato <span>interesse</span> per la materia
            </li>
            <li>
              Capacità di <span>risolvere problemi</span> e di{' '}
              <span>lavorare in gruppo</span>
            </li>
          </ul>
          <h3>Per l'Università:</h3>
          <ul>
            <li>
              Biotecnologie e relazioni con la fisica (
              <span>biologia quantistica</span>)
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Fisica;

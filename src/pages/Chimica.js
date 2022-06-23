import React from 'react';
import imgChimica from '../images/chimica/chimica.png';

const Chimica = () => {
  return (
    <main className='pagina chimica'>
      <h1>Potenziamento di Chimica</h1>
      <p>
        Durante le 11 lezioni tenute dalla professoressa Alfieri ho approfondito
        argomenti di chimica sia nuovi che già trattati in classe. Il corso,
        tenutosi tra ottobre e maggio della seconda liceo, mi ha permesso di
        comiciare a studiare per i test di ingresso per le{' '}
        <span>facoltà bio</span> e per <span>medicina</span>.
      </p>
      <section>
        <img src={imgChimica} alt='' />
        <div>
          <h3>Cosa mi ha lasciato:</h3>
          <ul>
            <li>
              Nuove <span>conoscenze</span>
            </li>
          </ul>

          <h3>Punti di debolezza:</h3>
          <ul>
            <li>
              Esperimenti e applicazioni pratiche avrebbero reso l'esperienza
              più incisiva
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Chimica;

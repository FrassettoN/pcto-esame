import React from 'react';
import imgStampante3D from '../images/stampa3D/stampante.png';

const Stampa3D = () => {
  return (
    <main className='pagina stampa3D'>
      <h1>Progettazione per Stampa 3D</h1>
      <p>
        Ho partecipato a questo PCTO durante la prima e la seconda liceo per un
        totale di 26 ore. Durante l'attività, organizzata dalla professoressa
        Fabozzi in collaborazione con il signor Ottone, ho avuto modo di
        approfondire la <span>storia delle stampa 3D</span>, le diverse{' '}
        <span>tecniche di progettazione</span> e ho imparato ad utilizzare il
        programma <span>Autodesk Fusion 360</span> per disegnare modelli
        tridimensionali. Infine, ho assistito alla stampa di un progetto
        realizzato dal mio <span>gruppo di lavoro</span> presso EasyMake3D.
      </p>
      <section>
        <img src={imgStampante3D} alt='' />
        <div>
          <h3>Cosa mi ha lasciato:</h3>
          <ul>
            <li>
              Nuove <span>competenze digitali</span> e <span>progettuali</span>
            </li>
            <li>
              Interesse per le <span>componenti solide</span> dei dispositivi
              tecnologici
            </li>
          </ul>

          <h3>Punti di debolezza:</h3>
          <ul>
            <li>
              La didattica a distanza ha influenzato negativamente le lezioni
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Stampa3D;

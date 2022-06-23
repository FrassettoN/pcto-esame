import React from 'react';
import logoBeGood from '../images/joblab/logo_begood.png';

const JobLab = () => {
  return (
    <main className='pagina joblab'>
      <h1>JOBLAB@Bocconi</h1>
      <p>
        Durante la settimana di <span>JobLab</span> presso l'università{' '}
        <span>Bocconi</span>, svolta online durante l'estate tra la prima e la
        seconda liceo, ho preso parte a lezioni di carattere{' '}
        <span>economico e imprenditoriale</span> tenute da professori
        universitari e da membri della società <span>Accenture</span>. Se le
        lezioni proposte sono state talvolta interessanti, le attività di gruppo
        sono risultate fallimentari a causa del numero troppo elevato di
        partecipanti e della scarsa comunicazione.
      </p>
      <section>
        <a href='https://www.begood.tips/' target='_blank' rel='noreferrer'>
          <img src={logoBeGood} alt='' />
        </a>
        <div>
          <h3>Cosa mi ha lasciato:</h3>
          <ul>
            <li>
              Basi di <span>pensiero progettuale</span>
            </li>
            <li>
              Curiosità riguardo a come conciliare{' '}
              <span>valori e profitto</span> in un'impresa
            </li>
            <li>
              Consapevolezza della necessità di <span>comunicazione</span> e{' '}
              <span>organizzazione</span> all'interno dei gruppi di lavoro
            </li>
            <li>
              Interesse per gli <span>Obiettivi di Sviluppo Sostenibile</span>,
              da cui è nato{' '}
              <a
                href='https://www.begood.tips/'
                target='_blank'
                rel='noreferrer'>
                BeGood.tips
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default JobLab;

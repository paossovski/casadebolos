import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb137 from '../../images/cdb_137.png';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page137 = () => {
  return(
    <div 
      id='Page137' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page137__Container'>
        <div>
          <p>
            <b className='Page__Text Page137__Title--Font'>
              Edilamar: Auxiliar de produção – Kobrasol
            </b>
          </p><br/>
          <p className='Page__Text Page__Line--Height'>
            Me chamo Edilamar, mas todas me conhecem como Dila, aos 63 anos de idade, enviei meu currículo para a Casa de Bolos e para minha surpresa fui chamada, digo surpresa pois com a minha idade, não achei que ainda conseguiria alguma oportunidade de emprego. Fui recebida na loja do Kobrasol, com muito carinho pela Diana, responsável pela loja. Estou a dois anos e 2 meses, sou feliz aqui, aprendi muita coisa nesse tempo e continuo aprendendo.
          </p>
        </div>
        <div className='Page137__Content__Container'>
          <div className='Page137__Img--Align'>
            <img className='Page137__Img' src={cdb137} alt='' />
          </div>
          <div className='Page137__Text__Container'>
            <p className='Page__Text Page137__Text'>
              “Hoje sou grata por    fazer parte dessa grande família.”
            </p><br/>
            <p className='Page__Text Page137__Text--B'>
              - Dila
            </p>
          </div>
        </div>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={137} />
        </div>
      </div>
    </div>
  );
}
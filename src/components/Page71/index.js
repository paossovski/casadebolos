import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb69 from '../../images/cdb_69.jpg';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page71 = () => {
  return(
    <div 
      id='Page71' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page71__Container'>
        <h1 className='Page__Text Page71__Text--Align'>
          SOBRE NOSSOS BOLOS
        </h1><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>SEMPRE</b> falar dos nossos diferenciais - Bolos sem Lactose, sem glúten, integrais, funcionais e diets - <b>COMUNICAR</b> que esses bolos são indicados para alérgicos e não intolerantes. Explicar que o bolo em si não contém glúten ou lactose, mas que são produzidos em uma cozinha que são produzidos todos os outros (com trigo e leite) assim, podendo conter traços desses ingredientes.  Ex: bolo de Maçã com Castanha não é integral, porém, tem a massa mais leve e é sem lactose, lembrando que ele é escuro, por conta do açúcar mascavo - para quem procura algo para não ‘engordar muito’, é uma boa opção na falta dos diets e integrais.
        </p><br/><br/>
        <img className='Page71__Img' src={cdb69} alt="" />
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={71} />
        </div>
      </div>
    </div>
  );
}
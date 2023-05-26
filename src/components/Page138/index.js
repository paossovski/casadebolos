import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb138 from '../../images/cdb_138.png';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page138 = () => {
  return(
    <div 
      id='Page138' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page138__Container'>
        <div>
          <p>
            <b className='Page__Text Page138__Title--Font'>
              Idivania: Boleira – Conselheiro Mafra
            </b>
          </p><br/>
          <p className='Page__Text Page__Line--Height'>
            Me chamo Idivania, conhecida como Diva, minha chegada na Casa de Bolos foi através de uma amiga da minha mãe, vulgo (Jacque). Elas marcaram de sair, depois de um longo dia de trabalho, elas tinha amizade e já se conheciam há um tempo, no diálogo entre elas foi comentado sobre a abertura da Casa de Bolos, foi falado que já estava tudo certinho, porém tinha a parte mais difícil, que era entrevistar e contratar funcionários para começar os trabalhos na loja, nisso a minha Mãe me indicou como uma pessoa de confiança dela, e no outro dia fui até a loja para conversar e conhecer a loja e todo o processo de funcionamento, etc. Marcamos de começar na segunda-feira e aqui estou eu há 6 anos na loja.
          </p>
        </div>
        <div className='Page138__Content__Container'>
          <div className='Page138__Img--Align'>
            <img className='Page138__Img' src={cdb138} alt='' />
          </div>
          <div className='Page138__Text__Container'>
            <p className='Page__Text Page138__Text'>
            </p><br/>
            <p className='Page__Text Page138__Text--B'>
              - Diva
            </p>
          </div>
        </div>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={138} />
        </div>
      </div>
    </div>
  );
}
import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb71 from '../../images/cdb_71.jpg';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page73 = () => {
  return(
    <div 
      id='Page73' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page73__Container'>
        <p className='Page__Text Page__Line--Height'>
          Nunca falar nenhum ingrediente (marca e gramatura) de receitas e nem que a mesma massa faz mais de um tipo de bolo (Maçã com Castanha e Natal, Fubá com Laranja e Crocante...).
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          Aipim Mandioca Macaxeira/ Bolo de Aipim sempre sairá na quinta-feira (Lojas receberão o bolo de aipim montado ou apenas ralado do Estreito), independente de encomendas. Se surgir encomendas em outras datas, antes de pegar, ligue para o Estreito e confirme se é possível assumir. Obs: Sempre pegar a encomenda de aipim para após às 13h, por conta da logística.
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>RENDIMENTO:</b> Sempre falar o rendimento de fatias equivalente ao peso nutriconal, estabelecido pela descrição do cardápio da Franquia.
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          No atendimento, nos deparamos com perguntas como: <b>QUEM É A MARICOTINHA?</b> A Dona Maricotinha é uma figura pública, da região de Florianópolis que tem um programa de rádio todos os dias na Regional FM 106,5 e no programa A Tarde é Nossa, no SBT para todo Estado de Santa Catarina. É a personagem propaganda da Casa de Bolos em Florianópolis e região desde o início da primeira loja. Não é a dona, é nossa amiga e é apaixonada pelos bolos da Casa de Bolos. 
        </p><br/><br/>
        <img className='Page73__Img' src={cdb71} alt="" />
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={73} />
        </div>
      </div>
    </div>
  );
}
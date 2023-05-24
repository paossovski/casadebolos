import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb46 from '../../images/cdb_46.jpg';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page47 = () => {
  return(
    <div 
      id='Page47' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page47__Container'>
        <p>
          <b className='Page__Text'>VERIFICAÇÃO DOS POTES NA GELADEIRA DE VENDAS:</b>
        </p><br/><br/>
        <img className='Page47__Img' src={cdb46} alt="" /><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>VERIFIQUE WHATSAPP:</b> As lojas possuem um celular para comunicação interna, caso clientes entrem em contato nesses números, orientação é: bater print da tela (assunto), nome e telefone, mandar para Central de Atendimento para que possam entrar em contato. Não responda o cliente por ali.
        </p><br/><br/><br/>
        <p><b>EMBALAGENS:</b></p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>O PAPEL ACOPLADO -</b> embalamos no papel acoplado porque é a melhor forma de manter a qualidade do bolo. E é uma forma de diminuir o plástico na natureza. Estamos ajudando a preservação do meio ambiente – “fale isso sem medo - quer plástico? Pague pelo plástico”
        </p>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={47} />
        </div>
      </div>
    </div>
  );
}
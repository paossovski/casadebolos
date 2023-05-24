import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb64 from '../../images/cdb_64.jpg';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page62 = () => {
  return(
    <div 
      id='Page62' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page62__Container'>
        <p className='Page__Text Page__Line--Height'>
          <b>PROBLEMAS COM BOLO</b><br/>
          Percebeu problema na produção, não colocar o bolo à venda, não leve para área de atendimento. Nosso      balcão precisa ser bonito e ter qualidade no produto para venda.
        </p><br/><br/>
        <img className='Page62__Img' src={cdb64} alt="" /><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>CHEGOU BOLO DE OUTRA UNIDADE EM FORMAS?</b> Não esqueça de separar nas caixas e devolvê-las (separe IMEDIATAMENTE, NÃO ESQUEÇA). 
        </p><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>IMPORTANTE:</b><br/>
          - tudo que chegar de outra loja anotar na planilha de produção no campo “recebidos” ou “produção do dia”
        </p><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>PLANILHA DE PRODUÇÃO – QUEM ANOTA?</b><br/>
          Cada boleira é responsável por anotar sua <b>PRODUÇÃO</b> na planilha. Atendimento anota sobras do dia, embalagens, velas, potes e coberturas e demais informações como troco, perdas, motoboy/delivery e etc.
        </p><br/>
        <p className='Page__Text Page__Line--Height'>
          Vai <b>ENVIAR BOLOS</b> para fazer potes para o Estreito?
          Antes de enviar o bolo, identifique em um papel as seguintes informações: Qual bolo é,  Data de produção, Enviar para pote, e Colocar o nome de quem separou (e não misturar bolos diferentes na mesma embalagem, contamina) Se foi bolo de geladeira, manter gelado até o recolhimento. Obs: Enviar apenas bolo que podem ser usados para pote. Bolos: milho, fubá, amendoim, cucas, tortas não viram potes é PERDA, anote corretamente. (consultar planilha de produção)
        </p>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={62} />
        </div>
      </div>
    </div>
  );
}
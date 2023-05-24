import React from 'react';

import '../../global_styles.css';
import './styles.css';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page80 = () => {
  return(
    <div 
      id='Page80' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page80__Container'>
        <p className='Page__Text Page__Line--Height'>
          <b>ENCOMENDAS ESPECIAIS:</b> Encomendas especiais, compras maiores, descontos especiais, condições especiais  para passar o telefone da Central de Atendimento, e a supervisão avaliará a possibilidade de desconto.<br/><br/> <b>Obs: Não há permissão de descontos, sem que haja autorização da supervisão.</b>
        </p><br/><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>IMPRENSA, DOAÇÕES OU AÇÕES SOCIAIS, AJUDA AO PRÓXIMO:</b> Fornecedores, imprensa, pedidos, currículos e ações sociais encaminhar para a CDA ou e-mail <a href='florianopolis@casadebolos.com.br'>florianopolis@casadebolos.com.br</a> e para lojas Curitiba usar o e-mail <a href='centrocuritiba@casadebolos.com.br'>centrocuritiba@casadebolos.com.br</a>.
        </p><br/><br/><br/><br/><br/>
        <p className='Page__Text Page80__Text--Align'>
          <b className='Page80__Text--Font'>PRÁTICAS DIÁRIAS DE NOSSAS<br/> COLABORADORAS</b>
        </p><br/><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>USO DE UNIFORME:</b> deve ser completo. Sendo composto por calça preta ou jeans - tons discretos, tênis (atendimento), sapato borracha (produção), camisa atendimento pólo, produção branca ou azul da CASA DE BOLOS, avental, touca e crachá.
        </p><br/><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>USO DO CRACHÁ:</b> É de uso indispensável a falta de crachá, interfere no uso incorreto do uniforme, ou seja, falta de crachá é considerado como uniforme incompleto.
        </p>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={80} />
        </div>
      </div>
    </div>
  );
}
import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb76 from '../../images/cdb_76.jpg';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page78 = () => {
  return(
    <div 
      id='Page78' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page78__Container'>
        <img className='Page78__Img' src={cdb76} alt="" /><br/><br/><br/>
        <p className='Page__Text Page78__Text--Align'>
          <b className='Page78__Text--Font'>RELAÇÃO COM CLIENTES</b>
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>NUNCA FORNEÇA SEU WHATSAPP PESSOAL PARA CLIENTES - </b>Use sempre da loja que trabalha para falar com a Central de Atendimento é esssa que fará o contato com o cliente. Obs: WhatsApp interno é apenas para se comunicar com as outras lojas e nunca com o cliente, independentemente se for um cliente muito conhecido ou parentes.
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>O CLIENTE RECLAMOU DO PRODUTO</b>&nbsp; 
          (<span className='Page78__Text--Border'>pegue os dados dele na hora, como o nome, telefone,  referências</span>): se ele trouxer o produto e perceber o problema troque na hora. Se ligou e ainda tem o produto peça para guardar e trazer ou mandar foto para o WhatsApp da Central de Atendimento (48) 99180-5070. Reclamação na rede social. Evitem que o cliente vá até a rede social ou e-mail da franquia. <b>CUIDE DO  CASO COM ATENÇÃO NA HORA!</b>
        </p><br/><br/>
        <p className='Page__Text'>
          <b>
            SEGUE EXEMPLO DE COMO NUNCA SE REFERIR AO CLIENTE, TENHA RESPEITO!
          </b>
        </p>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={78} />
        </div>
      </div>
    </div>
  );
}
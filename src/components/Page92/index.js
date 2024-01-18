import React from 'react';

import '../../global_styles.css';
import './styles.css';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page92 = () => {
  return(
    <div 
      id='Page92' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page92__Container'>
        <p className='Page__Text Page__Line--Height'>
          A <b className='Page92__Text--Border'>FAQ</b> sigla em inglês Frequently Asked Questions, conhecida também como <b>PERGUNTAS RESPONDIDAS FREQUENTEMENTE</b>, ou seja, o documento foi elaborado e construído em cima dos questionamentos de nossos clientes. E para conseguirmos melhorar e alinhar as lojas, segue a nossa abaixo. Facilitará a linguagem das lojas com os clientes, falarão sempre a mesma linguagem.
        </p><br/><br/>
        <p className='Page__Text'>
          <span className='Page92__Text--Border'>
            Atendimento inicial:
          </span><br/>
          Bom dia ou boa tarde, tudo bem? Como podemos lhe ajudar?
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <span className='Page92__Text--Border'>
            Central de Atendimento
          </span><br/>
          Falamos da Central de Atendimento de todas as lojas de Florianópolis e São José. E por uma  questão de logísticas, estamos centralizadas na loja do Estreito e no Centro de Florianópolis na Mauro Ramos.
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <span className='Page92__Text--Border'>
            Tem bolos a pronta entrega ou só por encomenda?
          </span><br/>
          Trabalhamos com as duas opções. Diariamente produzimos diversos sabores para o balcão, pode optar em encomendar o bolo de sua escolha para retirar no dia e horário de sua preferência.
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <span className='Page92__Text--Border'>
            Posso retirar em qualquer loja e horário?
          </span><br/>
          Sim, deixaremos seu pedido feito e produziremos para você. Estamos localizados nos seguintes endereços:
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          CENTRO 01 – Rua Conselheiro Mafra, 624 CENTRO 02 – Rua Anita Garibaldi, 128 <br/> CENTRO 03 - Avenida Mauro Ramos, 1225 <br/>
          ESTREITO – Rua General Liberato Bittencourt, 1777 KOBRASOL – Rua Adhemar da Silva, 711 – loja 1
        </p><br/><br/>
        <p className='Page__Text'>
          <b className='Page92__Text--Font'>E para Curitiba:</b></p><br/>
        <p className='Page__Text Page__Line--Height'>
          CENTRO CURITIBA – Rua Cândido Lopes, 223 ou <br/> 
          NOVO MUNDO – Rua São JudasTadeus, 22 esquina com Av Brasilia
        </p>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={92} />
        </div>
      </div>
    </div>
  );
}
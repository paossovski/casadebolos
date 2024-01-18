import React from 'react';

import '../../global_styles.css';
import './styles.css';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page99 = () => {
  return(
    <div 
      id='Page99' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page99__Container'>
        <p className='Page__Text Page__Line--Height'>
          <span className='Page99__Text--Border'>Nos dias de muito frio os bolos ficam gelados?</span><br/><br/>Os bolos saem quentinhos do forno, após, mantemos em temperatura ambiente, mantendo saborosos e no nosso padrão de qualidade. Se mantivermos eles aquecidos constantemente, ficarão ressecados e perderemos a nossa alta qualidade.
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b className='Page99__Text--Border'>Tem velas?</b><br/><br/>
          Sim, três opções: Estrela de Ouro (chama delicada, 3 unidades), Palitinhos (20 unidades) rosa, azul ou branco e por fim, a Fonte Luminosa (1 unidade, chama bem forte).
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <span className='Page99__Text--Border'>BoloBag</span><br/><br/>
          Sacola ecológica, tamanho ótimo para usar no dia-a-dia para o que precisar.
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <span className='Page99__Text--Font'>
            <b className='Page99__Text--Font Page99__Text--Background'>
              DELIVERY –
            </b> Para região de Florianópolis, São José e Biguaçu
          </span><br/>
          Em Curitiba acontece de forma independente, somente via Ifood, consultar APP ou dependendo da situação via UBER. 
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <span className='Page99__Text--Border'>Posso fazer pedido em qualquer momento do dia?</span><br/><br/>Pode sim. Tanto para antecipar encomendas, quanto para ser entregue no mesmo dia, desde que esteja no nosso horário de atendimento e entregas, de acordo com demanda.
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <span className='Page99__Text--Border'>Comecei a fazer o pedido de manhã, não terminei de responder e quando vou confirmar acabou o bolo, como fazer?</span><br/><br/>
          Como não foi confirmado o sabor desejado, não reservamos. Infelizmente, não disponibilizamos mais desse sabor a pronta entrega, mas temos... (DESCREVER TODOS DISPONÍVEIS). Ou se preferir, podemos transferir sua encomenda para amanhã, o que acha? 
        </p>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={99} />
        </div>
      </div>
    </div>
  );
}